import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <section id="contacto" className="bg-white scroll-mt-28" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Contacto</p>
            <h2 id="contacto-title" className="section-title text-left lg:text-4xl">
              Conversemos tu proyecto y agenda una demo gratuita.
            </h2>
            <p className="text-lg text-slate-600">
              Resolvemos dudas sobre alcance, tiempos y costos. Te compartimos un brief editable y una propuesta a medida.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-semibold text-slate-800"><Phone className="h-4 w-4 text-brand-500" /> +56 9 1234 5678</div>
              <div className="flex items-center gap-2 font-semibold text-slate-800"><Mail className="h-4 w-4 text-brand-500" /> hola@loopdigital.cl</div>
              <div className="flex items-center gap-2 font-semibold text-slate-800"><MapPin className="h-4 w-4 text-brand-500" /> Santiago, Chile</div>
            </div>
          </div>
          <div className="card p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
                  Nombre
                  <input
                    required
                    type="text"
                    className="rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900 shadow-inner focus:border-brand-400 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
                  Email
                  <input
                    required
                    type="email"
                    className="rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900 shadow-inner focus:border-brand-400 focus:outline-none"
                    placeholder="correo@empresa.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
                ¿Qué necesitas?
                <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900 shadow-inner focus:border-brand-400 focus:outline-none">
                  <option>Landing Page</option>
                  <option>Web Corporativa</option>
                  <option>Tienda Online</option>
                  <option>Soporte/Optimización</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
                Cuéntanos más
                <textarea
                  rows={4}
                  className="rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900 shadow-inner focus:border-brand-400 focus:outline-none"
                  placeholder="Incluye objetivos, plazos y referencias"
                />
              </label>
              <Button type="submit" variant="primary" fullWidth>
                Enviar mensaje
              </Button>
            </form>
            <p className="mt-3 text-center text-xs text-slate-500">
              Nos pondremos en contacto en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
