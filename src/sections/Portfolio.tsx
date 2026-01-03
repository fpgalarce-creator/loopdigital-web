import SmartImage from '../components/SmartImage';
import { getLocalImage } from '../lib/images';

const items = Array.from({ length: 6 }).map((_, idx) => ({
  title: `Proyecto ${idx + 1}`,
  tag: 'Landing / E-commerce',
  image: getLocalImage(`portfolio/thumb-${idx + 1}.svg`),
}));

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-white scroll-mt-28" aria-labelledby="portafolio-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Portafolio</p>
          <h2 id="portafolio-title" className="section-title">Proyectos listos para inspirar</h2>
          <p className="section-subtitle">
            Ejemplos listos para reemplazar con tus propias capturas y resultados.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card overflow-hidden">
              <SmartImage src={item.image} alt={item.title} className="h-48 w-full" />
              <div className="space-y-1 px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">{item.tag}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">Resultado medible y enfoque en conversión.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
