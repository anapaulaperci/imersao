import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  FileText, 
  CheckSquare, 
  User, 
  BookOpen,
  ChevronDown,
  Bell,
  ArrowUp,
  Menu,
  X
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      id: "dashboard",
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
      {/* ========== HEADER ========== */}
      <header className="lg:hidden lg:ms-65 fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[60] bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex justify-between basis-full items-center w-full py-2.5 px-2 sm:px-5">
          {/* Sidebar Toggle */}
          <button 
            type="button" 
            className="w-7 h-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="shrink-0 size-4" />
          </button>

          {/* Project Name */}
          <div className="inline-flex items-center text-start font-semibold text-gray-800 dark:text-white">
            <span className="max-w-16 truncate">Imersão Posicionamento</span>
          </div>
        </div>
      </header>

      {/* ========== MAIN SIDEBAR ========== */}
      <aside 
        className={`
          fixed inset-y-0 start-0 z-[60]
          w-65 h-full
          bg-purple-950
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
          transition-all duration-300 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full max-h-full py-3">
          <header className="h-11.5 px-8">
            <Link 
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" 
              to="/"
            >
              <div className="flex items-center space-x-3">
                <img src="/lovable-uploads/7433a794-51a8-45eb-81be-aeaccb87a06f.png" alt="Ana Paula Perci" className="h-8 w-8" />
                <span className="text-white font-bold text-lg">Ana Paula Perci</span>
              </div>
            </Link>
          </header>

          {/* Content */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {/* Nav */}
            <nav className="p-5 pt-0 w-full flex flex-col flex-wrap">
              <ul className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  
                  if (item.hasDropdown) {
                    return (
                      <li className="hs-accordion" key={item.id}>
                        <button 
                          type="button" 
                          className="hs-accordion-toggle hs-accordion-active:bg-white/10 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-white/10"
                        >
                          <Icon className="shrink-0 mt-0.5 size-4" />
                          {item.title}
                          <ChevronDown className="hs-accordion-active:-rotate-180 shrink-0 mt-1 size-3.5 ms-auto transition" />
                        </button>

                        <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                          <ul className="ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[19px] before:w-0.5 before:h-full before:bg-white/10">
                            {item.items?.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  className={`flex gap-x-4 py-2 px-3 text-sm rounded-lg focus:outline-hidden transition-colors ${
                                    isActive(subItem.path)
                                      ? 'bg-white/20 text-white'
                                      : 'text-white/80 hover:bg-white/10'
                                  }`}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <Link
                        className={`flex gap-x-3 py-2 px-3 text-sm rounded-lg focus:outline-hidden transition-colors ${
                          isActive(item.path!)
                            ? 'bg-white/20 text-white'
                            : 'text-white/80 hover:bg-white/10'
                        }`}
                        to={item.path!}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="shrink-0 mt-0.5 size-4" />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}

                {/* Upgrade Link */}
                <li>
                  <button className="flex gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 focus:outline-hidden focus:bg-white/10 w-full text-left">
                    <ArrowUp className="shrink-0 mt-0.5 size-4 text-teal-300" />
                    <span className="bg-clip-text bg-gradient-to-r from-teal-300 to-fuchsia-300 text-transparent">
                      Upgrade para PRO
                    </span>
                  </button>
                </li>

                {/* What's New */}
                <li>
                  <button className="flex gap-x-3 py-2 px-3 text-sm text-white/80 rounded-lg hover:bg-white/10 focus:outline-hidden focus:bg-white/10 w-full text-left">
                    <Bell className="shrink-0 mt-0.5 size-4" />
                    Notificações
                    <div className="ms-auto">
                      <span className="inline-flex items-center gap-1.5 py-px px-1.5 rounded-lg text-[10px] leading-4 font-medium border border-white/10 text-white/80">
                        v1.0
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Footer */}
          <footer className="hidden lg:block sticky bottom-0 inset-x-0 border-t border-white/10">
            <div className="px-7">
              <div className="flex">
                <button className="group w-full inline-flex items-center py-3 text-start text-white align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
                  <img src="/lovable-uploads/7433a794-51a8-45eb-81be-aeaccb87a06f.png" alt="Ana Paula Perci" className="size-8 shrink-0" />
                  <span className="block ms-3">
                    <span className="block text-sm font-medium text-white group-hover:text-white/70 group-focus-hover:text-white/70">
                      Ana Paula Perci
                    </span>
                    <span className="block text-xs text-white/70">
                      anapaulaperci.com
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </footer>

          {/* Close Button for Mobile */}
          <div className="lg:hidden absolute top-3 -end-3 z-10">
            <button 
              type="button" 
              className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-white/10 bg-purple-950 text-gray-400 hover:text-gray-300 focus:outline-hidden focus:text-gray-300 disabled:opacity-50 disabled:pointer-events-none" 
              onClick={() => setIsOpen(false)}
            >
              <X className="shrink-0 w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;