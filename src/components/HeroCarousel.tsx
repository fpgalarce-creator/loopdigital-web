import { useEffect, useState } from 'react';

type Slide = {
  id: string;
  title: string;
  description: string;
  badge: string;
  gradient: string;
  accent: string;
  cta?: string;
};

const slides: Slide[] = [
  {
    id: 'branding',
    title: 'Creamos páginas web profesionales',
    description: 'Branding LoopDigital enfocado en resultados digitales.',
    badge: 'LoopDigital',
    gradient: 'from-brand-500 via-brand-400 to-cyan-300',
    accent: 'bg-white/90 text-brand-700',
  },
  {
    id: 'corporativa',
    title: 'Web corporativa preparada para tu equipo',
    description: 'Secciones claras, testimonios y agenda de contacto visible.',
    badge: 'Sitio corporativo',
    gradient: 'from-slate-900 via-brand-700 to-brand-500',
    accent: 'bg-brand-50 text-brand-700',
  },
  {
    id: 'landing',
    title: 'Landing orientada a conversión',
    description: 'Hero con CTA destacado y beneficios listos para escalar.',
    badge: 'Landing page',
    gradient: 'from-brand-600 via-brand-500 to-amber-300',
    accent: 'bg-white/90 text-brand-800',
    cta: 'Quiero mi landing',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/30 bg-white/90 shadow-card">
      <div className="relative h-[420px] sm:h-[460px]">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`absolute inset-0 flex flex-col gap-4 rounded-[22px] bg-gradient-to-br p-6 text-brand-50 transition-opacity duration-700 ease-in-out ${slide.gradient} ${
              index === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                {slide.badge}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                Vista previa
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-6 rounded-2xl bg-white/10 p-4 shadow-inner">
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${slide.accent}`}>
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  {slide.title}
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">{slide.description}</h3>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-3 rounded-xl bg-white/15 p-4 backdrop-blur">
                  <div className="h-14 rounded-lg bg-white/20" />
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-white/40" />
                    <div className="h-3 w-2/3 rounded bg-white/30" />
                    <div className="h-3 w-1/2 rounded bg-white/20" />
                  </div>
                  <div className="mt-3 flex gap-3">
                    <span className="h-10 flex-1 rounded-lg bg-white/30" />
                    <span className="h-10 flex-1 rounded-lg bg-white/20" />
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-3 rounded-xl bg-white/15 p-4 backdrop-blur">
                  <div className="h-16 rounded-lg bg-white/25" />
                  <div className="space-y-2">
                    <div className="h-3 w-2/3 rounded bg-white/35" />
                    <div className="h-3 w-1/2 rounded bg-white/25" />
                    <div className="h-3 w-5/6 rounded bg-white/20" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((item) => (
                      <span key={item} className="h-7 flex-1 rounded-full bg-white/25" />
                    ))}
                  </div>
                  {slide.cta && (
                    <div className="flex items-center justify-between rounded-lg bg-white/90 px-4 py-3 text-sm font-semibold text-brand-700 shadow-soft">
                      <span>{slide.cta}</span>
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs text-brand-700">CTA</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`h-2.5 w-2.5 rounded-full transition ${index === active ? 'bg-brand-600' : 'bg-brand-200'}`}
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => setActive(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
