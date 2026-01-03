export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <div className="font-bold">
          loop<span className="text-brand-300">digital</span>
        </div>
        <p className="text-slate-300">© {new Date().getFullYear()} LoopDigital. Todos los derechos reservados.</p>
        <div className="flex gap-4 text-slate-300">
          <a className="hover:text-white" href="#nosotros">Nosotros</a>
          <a className="hover:text-white" href="#servicios">Servicios</a>
          <a className="hover:text-white" href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
