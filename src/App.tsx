import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import BenefitsRow from './sections/BenefitsRow';
import Services from './sections/Services';
import CTASection from './sections/CTASection';
import Plans from './sections/Plans';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-[76px]">
        <Hero />
        <BenefitsRow />
        <Services />
        <section className="bg-white" aria-labelledby="carousel-title">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
            <div className="mb-6 space-y-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Inspiración visual</p>
              <h2 id="carousel-title" className="text-3xl font-bold md:text-4xl">Ejemplos listos para personalizar</h2>
              <p className="text-slate-600">Reemplaza las imágenes en /public/images para actualizar el carrusel sin tocar código.</p>
            </div>
            <ImageCarousel />
          </div>
        </section>
        <CTASection />
        <Plans />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
