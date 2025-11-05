import { ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative border-b border-black bg-white min-h-[70vh] md:min-h-[80vh]">
      {/* Spline background as full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        {/* Soft gradient for contrast over the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-white/0" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest bg-yellow-200">
          Logo & Web Design Agency
        </p>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
          Brutally good logos and web experiences that convert.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-800">
          Modern aesthetics with ruthless clarity. No fluff—just systems that scale and sell.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
          <a href="/#contact" className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-5 py-3 font-semibold hover:bg-white hover:text-black transition-colors">
            Get a quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/services" className="inline-flex items-center gap-2 border-2 border-black bg-white text-black px-5 py-3 font-semibold hover:bg-black hover:text-white transition-colors">
            Explore services
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "projects", v: "+120" },
            { k: "industries", v: "24" },
            { k: "avg. NPS", v: "78" },
            { k: "years", v: "8" },
          ].map((stat) => (
            <div key={stat.k} className="border-2 border-black p-4 bg-white/90 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black">{stat.v}</div>
              <div className="text-sm uppercase tracking-wider text-neutral-700">{stat.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
