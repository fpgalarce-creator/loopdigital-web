import { CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

const checklist = ['Diseño Personalizado', 'Optimización SEO', 'Adaptación Móvil'];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/cta-waves.svg')] bg-cover bg-center opacity-80" />
      <div className="relative mx-auto max-w-5xl px-4 py-14 text-center md:px-8">
        <h3 id="cta-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
          Obtén una Página Web Profesional que lleve tu negocio al siguiente nivel.
        </h3>
        <p className="mt-3 text-lg text-slate-600">
          Diseñamos experiencias que generan confianza, leads y ventas desde el primer clic.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/70 p-4 shadow-soft backdrop-blur sm:flex-row sm:gap-6">
          {checklist.map((item) => (
            <span key={item} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
              <CheckCircle2 className="h-5 w-5 text-brand-500" />
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Cotiza tu Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
