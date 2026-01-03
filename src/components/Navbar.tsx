import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const navLinks = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Servicios', href: 'servicios' },
  { label: 'Portafolio', href: 'portafolio' },
  { label: 'Sobre Nosotros', href: 'nosotros' },
  { label: 'Planes', href: 'planes' },
  { label: 'Contacto', href: 'contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -35% 0px',
        threshold: 0.3,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white/80 backdrop-blur-md shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-soft"></div>
          <div className="text-lg font-extrabold text-slate-900">
            loop<span className="text-brand-500">digital</span>
          </div>
        </div>

        <nav className="hidden items-center gap-2 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className={`relative rounded-full px-4 py-2 transition ${
                activeSection === link.href
                  ? 'bg-brand-50 text-brand-700 shadow-inner ring-1 ring-brand-100'
                  : 'hover:bg-slate-100 hover:text-brand-600'
              }`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}
          <Button variant="primary" size="md" onClick={() => handleNav('contacto')}>
            Cotizar
          </Button>
        </nav>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
            aria-label="Abrir menú"
          >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="bg-white px-4 pb-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                className={`w-full rounded-xl px-3 py-3 text-left transition ${
                  activeSection === link.href
                    ? 'bg-brand-50 text-brand-700'
                    : 'hover:bg-brand-50'
                }`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            ))}
            <Button variant="primary" fullWidth onClick={() => handleNav('contacto')}>
              Cotizar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
