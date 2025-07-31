import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Calendar, 
  FileText, 
  CheckSquare, 
  User, 
  Menu, 
  X,
  BookOpen,
  ChevronDown,
  Users,
  Settings,
  Bell,
  ArrowUp
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      id: "home",
      title: "Dashboard",
      icon: Home,
      hasDropdown: true,
      items: [
        { title: "Visão Geral", path: "/" },
        { title: "Analytics", path: "/analytics" }
      ]
    },
    {
      id: "cronograma",
      title: "Cronograma",
      icon: Calendar,
      path: "/cronograma"
    },
    {
      id: "resumos",
      title: "Resumos",
      icon: FileText,
      path: "/resumos"
    },
    {
      id: "checklist",
      title: "Checklist",
      icon: CheckSquare,
      path: "/checklist"
    },
    {
      id: "perfil",
      title: "Perfil",
      icon: User,
      hasDropdown: true,
      items: [
        { title: "Meu Perfil", path: "/perfil" },
        { title: "Configurações", path: "/configuracoes" }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 flex justify-between items-center w-full py-2.5 px-4 bg-card border-b border-border z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-9"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </header>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 lg:w-16 
          bg-primary border-r border-border
          transition-all duration-300 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full py-3">
          {/* Logo Header */}
          <header className="px-8 h-12 lg:flex lg:flex-col lg:items-center">
            {/* Desktop Logo - Collapsed */}
            <div className="hidden lg:block">
              <Link 
                to="/" 
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <BookOpen className="h-6 w-6 text-white" />
              </Link>
            </div>

            {/* Mobile Logo - Expanded */}
            <div className="lg:hidden">
              <Link to="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Imersão Posicionamento
                </span>
              </Link>
            </div>
          </header>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-hidden px-2 lg:px-0">
            {/* Desktop Navigation - Collapsed Icons */}
            <nav className="mt-6 hidden lg:block">
              <ul className="text-center space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  
                  if (item.hasDropdown) {
                    return (
                      <li key={item.id} className="relative group">
                        <div className="relative">
                          <button className="flex justify-center items-center w-10 h-10 text-white/80 rounded-full hover:bg-white/10 transition-colors duration-200 mx-auto">
                            <Icon className="h-5 w-5" />
                          </button>
                          
                          {/* Dropdown Menu */}
                          <div className="absolute left-14 top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="bg-card border border-border rounded-lg shadow-lg w-48 py-1">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                                    isActive(subItem.path)
                                      ? 'bg-primary text-primary-foreground'
                                      : 'text-foreground hover:bg-muted'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path!}
                        className={`flex justify-center items-center w-10 h-10 rounded-full transition-colors duration-200 mx-auto ${
                          isActive(item.path!)
                            ? 'bg-white/20 text-white'
                            : 'text-white/80 hover:bg-white/10'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </li>
                  );
                })}

                {/* Additional Desktop Icons */}
                <li>
                  <button className="flex justify-center items-center w-10 h-10 text-white/80 rounded-full hover:bg-white/10 transition-colors duration-200 mx-auto">
                    <Bell className="h-5 w-5" />
                  </button>
                </li>
                <li>
                  <button className="flex justify-center items-center w-10 h-10 text-white/80 rounded-full hover:bg-white/10 transition-colors duration-200 mx-auto">
                    <ArrowUp className="h-5 w-5" />
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Navigation - Expanded */}
            <nav className="lg:hidden p-3 pt-0 w-full">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  
                  if (item.hasDropdown) {
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => toggleDropdown(item.id)}
                          className={`w-full text-left flex items-center gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 transition-colors duration-200 ${
                            openDropdowns[item.id] ? 'bg-white/10' : ''
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          {item.title}
                          <ChevronDown 
                            className={`h-4 w-4 ml-auto transition-transform duration-200 ${
                              openDropdowns[item.id] ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {openDropdowns[item.id] && (
                          <ul className="pl-7 mt-1 space-y-1 border-l border-white/10 ml-3">
                            {item.items?.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  to={subItem.path}
                                  className={`block py-2 px-3 text-sm rounded-lg transition-colors duration-200 ${
                                    isActive(subItem.path)
                                      ? 'bg-white/20 text-white'
                                      : 'text-white/80 hover:bg-white/10'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path!}
                        className={`flex items-center gap-x-3 py-2 px-3 text-sm rounded-lg transition-colors duration-200 ${
                          isActive(item.path!)
                            ? 'bg-white/20 text-white'
                            : 'text-white/80 hover:bg-white/10'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}

                {/* Additional Mobile Links */}
                <li>
                  <button className="flex items-center gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 transition-colors duration-200 w-full text-left">
                    <Bell className="h-4 w-4 flex-shrink-0" />
                    Notificações
                    <span className="ml-auto px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-white/80">
                      v1.0
                    </span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 transition-colors duration-200 w-full text-left">
                    <ArrowUp className="h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Upgrade para PRO
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Close Button for Mobile */}
          <div className="lg:hidden absolute top-3 -right-3 z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-6 h-7 bg-primary border border-white/10 text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;