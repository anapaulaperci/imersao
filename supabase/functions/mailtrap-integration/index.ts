import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MailtrapRequest {
  action: 'send_welcome' | 'send_access_notification' | 'update_user_access';
  userEmail: string;
  userName?: string;
  accessLevel?: string;
  templateData?: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const mailtrapApiKey = Deno.env.get('MAILTRAP_API_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { action, userEmail, userName, accessLevel, templateData }: MailtrapRequest = await req.json();

    console.log(`Processing Mailtrap action: ${action} for user: ${userEmail}`);

    // Verify user exists in our system
    const { data: user, error: userError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', (await supabase.auth.admin.getUserByEmail(userEmail)).data.user?.id)
      .single();

    if (userError) {
      console.error('User verification error:', userError);
      return new Response(
        JSON.stringify({ error: 'User not found in system' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let emailTemplate = '';
    let emailSubject = '';

    switch (action) {
      case 'send_welcome':
        emailSubject = 'Bem-vindo à Imersão Posicionamento!';
        emailTemplate = `
          <h1>Olá ${userName || userEmail}!</h1>
          <p>Seja bem-vindo(a) à nossa plataforma de Imersão Posicionamento.</p>
          <p>Seu acesso foi configurado com sucesso. Você já pode fazer login e começar a explorar o conteúdo.</p>
          <p>Se precisar de ajuda, nossa equipe está sempre disponível.</p>
          <p>Bom aprendizado!</p>
        `;
        break;

      case 'send_access_notification':
        emailSubject = 'Seu nível de acesso foi atualizado';
        emailTemplate = `
          <h1>Olá ${userName || userEmail}!</h1>
          <p>Informamos que seu nível de acesso foi atualizado para: <strong>${accessLevel}</strong></p>
          <p>Esta alteração já está ativa em sua conta.</p>
          <p>Se tiver dúvidas sobre as novas permissões, entre em contato conosco.</p>
        `;
        break;

      case 'update_user_access':
        // Update user access level in database
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: accessLevel })
          .eq('user_id', user.user_id);

        if (updateError) {
          console.error('Error updating user access:', updateError);
          return new Response(
            JSON.stringify({ error: 'Failed to update user access' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        emailSubject = 'Permissões atualizadas';
        emailTemplate = `
          <h1>Olá ${userName || userEmail}!</h1>
          <p>Suas permissões foram atualizadas com sucesso.</p>
          <p>Novo nível de acesso: <strong>${accessLevel}</strong></p>
          <p>As mudanças já estão ativas em sua conta.</p>
        `;
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    // Send email via Mailtrap
    const mailtrapResponse = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailtrapApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: {
          email: 'noreply@imersaoposicionamento.com',
          name: 'Imersão Posicionamento'
        },
        to: [{
          email: userEmail,
          name: userName || userEmail
        }],
        subject: emailSubject,
        html: emailTemplate,
        category: 'user_management',
        custom_variables: {
          action: action,
          user_id: user.user_id,
          timestamp: new Date().toISOString(),
          ...templateData
        }
      }),
    });

    const mailtrapResult = await mailtrapResponse.json();

    if (!mailtrapResponse.ok) {
      console.error('Mailtrap API error:', mailtrapResult);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: mailtrapResult }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully via Mailtrap:', mailtrapResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        mailtrap_response: mailtrapResult
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in mailtrap-integration function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);