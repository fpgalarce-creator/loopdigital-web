import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from './SmartImage';
import { getLocalImage } from '../lib/images';

const slides = [
  { src: getLocalImage('carousel/slide-1.svg'), title: 'Landing creativa' },
  { src: getLocalImage('carousel/slide-2.svg'), title: 'E-commerce UI' },
  { src: getLocalImage('carousel/slide-3.svg'), title: 'Dashboard adaptable' },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (direction: 'prev' | 'next') => {
    setIndex((prev) => {
      if (direction === 'next') return (prev + 1) % slides.length;
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white/70 p-4 shadow-soft">
      <div className="flex items-center gap-4">
        <button
          aria-label="Anterior"
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:text-brand-600"
          onClick={() => goTo('prev')}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="relative flex-1 overflow-hidden rounded-xl border border-slate-100 bg-white">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.src} className="w-full flex-shrink-0">
                <SmartImage src={slide.src} alt={slide.title} className="h-64 w-full" />
                <p className="p-3 text-center text-sm font-semibold text-slate-700">{slide.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Siguiente"
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:text-brand-600"
          onClick={() => goTo('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-brand-500' : 'bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
