import { LayoutDashboard, SearchCheck, ShoppingBag } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import { getLocalImage } from '../lib/images';
import Button from '../components/ui/Button';

const services = [
  {
    title: 'Diseño de Páginas Web',
    description: 'Diseños modernos, rápidos y optimizados para convertir visitantes en clientes.',
    icon: LayoutDashboard,
    image: getLocalImage('icons/service-web.svg'),
  },
  {
    title: 'Tiendas Online y E-commerce',
    description: 'Catálogo, pagos y automatización para que vendas sin fricción.',
    icon: ShoppingBag,
    image: getLocalImage('icons/service-ecommerce.svg'),
  },
  {
    title: 'Posicionamiento SEO',
    description: 'Optimización técnica y de contenido para ganar visibilidad y tráfico orgánico.',
    icon: SearchCheck,
    image: getLocalImage('icons/service-seo.svg'),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 scroll-mt-28" aria-labelledby="servicios-title">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Nuestros Servicios</p>
          <h2 id="servicios-title" className="section-title">
            Soluciones Web a la Medida
          </h2>
          <p className="section-subtitle">
            Creamos experiencias digitales que conectan con tus clientes, reflejan tu marca y están listas para escalar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, image, icon: Icon }) => (
            <article key={title} className="card relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 to-transparent" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <SmartImage
                  src={image}
                  alt={title}
                  className="h-12 w-12 rounded-full bg-white object-contain"
                />
              </div>
              <h3 className="relative mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="relative mt-2 text-sm text-slate-600">{description}</p>
              <Button
                variant="ghost"
                size="md"
                className="relative mt-4 justify-start px-0 text-brand-600 hover:text-brand-700"
              >
                Ver más →
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
