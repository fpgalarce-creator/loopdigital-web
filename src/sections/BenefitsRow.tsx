import { BarChart3, Rocket, Wrench } from 'lucide-react';

const benefits = [
  {
    title: 'Impulsa tus ventas',
    description: 'Estrategias centradas en conversión y resultados medibles.',
    icon: Rocket,
  },
  {
    title: 'Optimiza tu visibilidad',
    description: 'SEO técnico y contenido optimizado desde el lanzamiento.',
    icon: BarChart3,
  },
  {
    title: 'Desarrollo a la medida',
    description: 'Sitios adaptados a tus procesos y herramientas de negocio.',
    icon: Wrench,
  },
];

export default function BenefitsRow() {
  return (
    <section className="bg-white" aria-labelledby="beneficios">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="card flex items-start gap-3 rounded-2xl px-5 py-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
