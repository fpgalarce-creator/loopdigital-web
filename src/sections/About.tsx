import { ShieldCheck, Sparkles, Timer } from 'lucide-react';

const highlights = [
  {
    title: 'Implementación ágil',
    description: 'Sprints cortos y entregables visibles cada semana.',
    icon: Timer,
  },
  {
    title: 'Calidad asegurada',
    description: 'Pruebas, accesibilidad y performance desde el día uno.',
    icon: ShieldCheck,
  },
  {
    title: 'Creatividad estratégica',
    description: 'Diseño con foco en negocio y experiencia de usuario.',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-slate-50 scroll-mt-28" aria-labelledby="nosotros-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Sobre Nosotros</p>
            <h2 id="nosotros-title" className="section-title text-left lg:text-4xl">
              Somos un equipo de especialistas en web y marketing digital.
            </h2>
            <p className="text-lg text-slate-600">
              Combinamos estrategia, diseño y tecnología para crear sitios que vendan más y comuniquen mejor. Cada entrega incluye documentación para que tu equipo pueda continuar sin fricciones.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="card flex items-start gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl bg-white p-6 shadow-card">
            <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-brand-100 blur-3xl" />
            <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-cyan-100 blur-3xl" />
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase text-brand-600">Nuestro enfoque</p>
              <div className="flex flex-col gap-3">
                {[ 'Diagnóstico y roadmap', 'UI/UX + contenidos', 'Desarrollo y optimización', 'Lanzamiento y seguimiento' ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
