import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'PLAN START – Landing Page',
    audience: 'Ideal para emprendedores',
    price: '$100.000 – $150.000 CLP',
    description: 'Página única optimizada para convertir visitas en contactos.',
    features: [
      'Página única',
      'Botón WhatsApp',
      'Diseño moderno',
      'Responsive',
      'SSL',
      'Dominio configurable',
    ],
    highlighted: false,
  },
  {
    name: 'PLAN WEB PRO – Sitio Completo',
    audience: 'Negocios en crecimiento',
    price: 'Cotización según alcance',
    description: 'Hasta 5 secciones listas para mostrar servicios, equipo y contacto.',
    features: [
      'Hasta 5 secciones (Inicio/Servicios/Nosotros/Portafolio/Contacto)',
      'Formularios de contacto',
      'Integración WhatsApp',
      'SEO básico',
      'Responsive',
      'SSL + Dominio configurable',
    ],
    highlighted: true,
  },
  {
    name: 'PLAN E-COMMERCE – Tienda Online',
    audience: 'Venta directa',
    price: 'Cotización según catálogo',
    description: 'Catálogo y carrito con medios de pago integrables en el futuro.',
    features: [
      'Catálogo + carrito',
      'Medios de pago (Webpay/Flow a futuro)',
      'Gestión de productos',
      'SEO básico',
      'Responsive',
      'SSL + Dominio configurable',
    ],
    highlighted: false,
  },
  {
    name: 'PLAN BRANDING + WEB',
    audience: 'Marca coherente',
    price: 'Personalizable',
    description: 'Lineamiento visual, paleta y sitio base listo para editar.',
    features: [
      'Guía de estilos editable',
      'Kit de íconos y botones',
      'Landing editable',
      'Textos base para ventas',
      'Soporte para blog',
      'Optimización mobile',
    ],
    highlighted: false,
  },
  {
    name: 'PLAN ESCALABLE',
    audience: 'Proyectos en evolución',
    price: 'A medida',
    description: 'Infraestructura preparada para crecer con integraciones y APIs.',
    features: [
      'Arquitectura modular',
      'Integraciones (CRM/ERP) preparadas',
      'Componentes reutilizables',
      'Checklist de performance',
      'Soporte analítica',
      'Roadmap editable',
    ],
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <section id="planes" className="bg-slate-50 scroll-mt-28" aria-labelledby="planes-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Planes</p>
          <h2 id="planes-title" className="section-title">Planes que crecen con tu negocio</h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapte a tus objetivos. Todos incluyen acompañamiento y personalización.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card flex h-full flex-col gap-4 p-6 ${
                plan.highlighted ? 'ring-2 ring-brand-300 shadow-card' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">{plan.audience}</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </div>
                {plan.highlighted && (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase text-brand-700">
                    Recomendado
                  </span>
                )}
              </div>
              <div className="text-2xl font-extrabold text-brand-600">{plan.price}</div>
              <ul className="flex flex-1 flex-col gap-2 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" fullWidth className="mt-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Cotizar este plan
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
