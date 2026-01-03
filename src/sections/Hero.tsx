import { ArrowRight, Sparkles } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import { getMockupImage } from '../lib/images';
import Button from '../components/ui/Button';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-gradient text-white scroll-mt-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-10%] top-20 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-30%] h-[320px] bg-[url('/images/backgrounds/waves.svg')] bg-cover bg-bottom opacity-80" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-28 md:px-8 lg:flex-row lg:items-center lg:pt-32">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-200" />
            <span>Agencia web especializada en negocios digitales</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Hacemos Páginas Web Profesionales
          </h1>
          <p className="text-lg text-white/85 md:text-xl">
            Impulsa tu negocio con una presencia online atractiva, optimizada y lista para convertir. Diseño estratégico, velocidad y SEO desde el primer día.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              variant="primary"
              fullWidth
              className="sm:w-auto"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Consulta Gratuita
            </Button>
            <Button
              variant="secondary"
              fullWidth
              className="sm:w-auto"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Ver Servicios
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {[
              'Entrega en tiempos récord',
              'SEO y performance listos para escalar',
              'Acompañamiento post-lanzamiento',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/90 backdrop-blur"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-xl rounded-[28px] bg-white/10 p-4 shadow-card backdrop-blur">
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 blur-lg" />
            <div className="absolute -right-4 -bottom-6 h-20 w-20 rounded-2xl bg-cyan-300/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/30 bg-white/90 shadow-card">
              <SmartImage
                src={getMockupImage('laptop-hero.svg')}
                alt="Mockup de laptop"
                className="h-auto w-full"
                rounded={false}
              />
              <div className="absolute -left-10 bottom-6 w-32 rotate-[-6deg] rounded-2xl border border-white/70 bg-white/90 p-2 shadow-soft">
                <SmartImage
                  src={getMockupImage('phone-hero.svg')}
                  alt="Mockup móvil"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-brand-700 shadow-soft">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
                Landing lista para convertir
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
