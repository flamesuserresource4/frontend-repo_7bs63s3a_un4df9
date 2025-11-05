import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest bg-yellow-200">
          Logo & Web Design Agency
        </p>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
          Brutally good logos and web experiences that convert.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-700">
          We craft identities and websites with a bold, minimal aesthetic. No fluff—just design that works and gets you results.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-5 py-3 font-semibold hover:bg-white hover:text-black transition-colors">
            Get a quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#work" className="inline-flex items-center gap-2 border-2 border-black bg-white text-black px-5 py-3 font-semibold hover:bg-black hover:text-white transition-colors">
            See our work
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "projects", v: "+120" },
            { k: "industries", v: "24" },
            { k: "avg. NPS", v: "78" },
            { k: "years", v: "8" },
          ].map((stat) => (
            <div key={stat.k} className="border-2 border-black p-4 bg-white">
              <div className="text-3xl md:text-4xl font-black">{stat.v}</div>
              <div className="text-sm uppercase tracking-wider text-neutral-600">{stat.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
