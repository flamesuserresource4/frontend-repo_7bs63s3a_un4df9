import { PenTool, Monitor, Layers, ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-white text-black">
      {/* Cover */}
      <section className="border-b-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest bg-yellow-200">
            Services
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Not just cards — a system
            <br /> that scales your brand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-700">
            We design identities and websites as cohesive systems. Below is exactly how we build, what you get, and transparent pricing.
          </p>
        </div>
      </section>

      {/* Packages overview - brutal grid with sticky left rail on desktop */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
          <aside className="md:col-span-1 md:sticky md:top-16 h-fit">
            <div className="border-2 border-black p-4">
              <h2 className="text-2xl font-black">Choose your track</h2>
              <p className="mt-2 text-sm text-neutral-700">Start with a focus. We can expand or blend as needed.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="size-2 bg-black inline-block" /> Logo Systems</li>
                <li className="flex items-center gap-2"><span className="size-2 bg-black inline-block" /> Web Experience</li>
                <li className="flex items-center gap-2"><span className="size-2 bg-black inline-block" /> Brand Platform</li>
              </ul>
            </div>
          </aside>
          <div className="md:col-span-2 grid gap-6">
            {/* Logo Systems */}
            <article className="border-2 border-black bg-white">
              <div className="border-b-2 border-black p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-black p-2 bg-white"><PenTool className="h-5 w-5" /></div>
                  <h3 className="text-xl font-extrabold">Logo Systems</h3>
                </div>
                <span className="text-sm font-mono uppercase">from $1,200</span>
              </div>
              <div className="p-4 grid md:grid-cols-2 gap-4">
                <p className="text-neutral-700">We craft a flexible logo family with lockups, clear space, and rules that protect the mark over time.</p>
                <ul className="space-y-2">
                  {[
                    "Primary + Secondary marks",
                    "Icon / Monogram",
                    "Black/White + Color variants",
                    "Usage guidelines (PDF)",
                    "Export kit (SVG, PNG, Figma)"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" /> {f}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Web Experience */}
            <article className="border-2 border-black bg-white">
              <div className="border-b-2 border-black p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-black p-2 bg-white"><Monitor className="h-5 w-5" /></div>
                  <h3 className="text-xl font-extrabold">Web Experience</h3>
                </div>
                <span className="text-sm font-mono uppercase">from $2,500</span>
              </div>
              <div className="p-4 grid md:grid-cols-2 gap-4">
                <p className="text-neutral-700">A conversion-first website built with brutalist clarity. Wireframes, visual system, and production-ready assets.</p>
                <ul className="space-y-2">
                  {[
                    "Information architecture",
                    "Wireframes (desktop + mobile)",
                    "Visual design system",
                    "Dev-ready assets & specs",
                    "Optional Webflow/Next build"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" /> {f}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Brand Platform */}
            <article className="border-2 border-black bg-white">
              <div className="border-b-2 border-black p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-black p-2 bg-white"><Layers className="h-5 w-5" /></div>
                  <h3 className="text-xl font-extrabold">Brand Platform</h3>
                </div>
                <span className="text-sm font-mono uppercase">from $1,800</span>
              </div>
              <div className="p-4 grid md:grid-cols-2 gap-4">
                <p className="text-neutral-700">Type, color, and component libraries that unify every touchpoint. Built for teams and scale.</p>
                <ul className="space-y-2">
                  {[
                    "Typography & color system",
                    "Components & patterns",
                    "Usage rules & examples",
                    "Brand file management",
                    "Training workshop (optional)"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" /> {f}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="border-b-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">How we work</h2>
            <span className="text-sm text-neutral-600">2–6 weeks depending on scope</span>
          </div>
          <ol className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Discovery", d: "Goals, audience, constraints. We ask hard questions." },
              { n: "02", t: "Direction", d: "Moodboards and strategic lanes to align taste + outcomes." },
              { n: "03", t: "Design", d: "Rapid iterations. Brutal clarity in typography, grids, contrast." },
              { n: "04", t: "Delivery", d: "Guidelines, exports, and handoff. We stay available for support." },
            ].map((s) => (
              <li key={s.n} className="border-2 border-black p-4 bg-white flex flex-col">
                <span className="text-sm font-mono">{s.n}</span>
                <h3 className="text-xl font-extrabold mt-1">{s.t}</h3>
                <p className="text-neutral-700 mt-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="border-b-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Logo Sprint", price: "$1,200", points: ["1–2 weeks", "2 directions", "Full export kit"] },
              { title: "Website Core", price: "$2,500", points: ["Architecture", "5 key pages", "Handoff to dev"] },
              { title: "Brand System", price: "$3,800", points: ["Type & color", "Components", "Guidelines"] },
            ].map((p) => (
              <div key={p.title} className="border-2 border-black p-6 bg-white">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-black">{p.title}</h3>
                  <span className="font-mono">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> {pt}</li>
                  ))}
                </ul>
                <a href="/#contact" className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-black text-white px-4 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
                  Book this <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">FAQs</h2>
            <span className="text-sm text-neutral-600">Transparent by default</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Do you do development?", a: "Yes — Webflow or React handoff. We can also partner with your dev team." },
              { q: "What if I only need a logo?", a: "That’s fine. Our Logo Sprint is fast and focused with clear deliverables." },
              { q: "How many revisions?", a: "We iterate until the scope’s objectives are met. No nickel-and-diming." },
              { q: "Payment terms?", a: "50% to start, 50% on delivery. Flexible plans for longer engagements." },
            ].map((f) => (
              <div key={f.q} className="border-2 border-black p-4 bg-white">
                <h3 className="font-extrabold">{f.q}</h3>
                <p className="text-neutral-700 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
