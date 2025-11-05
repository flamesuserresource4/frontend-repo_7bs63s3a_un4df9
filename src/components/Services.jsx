import { PenTool, Monitor, Layers } from "lucide-react";

const items = [
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Distinct, timeless marks. Delivered with clear usage rules and export kit.",
    price: "from $1,200",
  },
  {
    icon: Monitor,
    title: "Web Design",
    desc: "Conversion-focused websites built with a brutalist edge and modern UX.",
    price: "from $2,500",
  },
  {
    icon: Layers,
    title: "Brand Systems",
    desc: "Type, color, and component libraries that scale with your product.",
    price: "from $1,800",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Services</h2>
          <a href="#contact" className="hidden md:inline-flex border-2 border-black px-4 py-2 font-semibold bg-black text-white hover:bg-white hover:text-black transition-colors">Book a discovery call</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="group border-2 border-black p-6 bg-white hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3">
                <div className="border-2 border-black p-2 bg-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold">{title}</h3>
              </div>
              <p className="mt-4 text-neutral-700">{desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-mono uppercase tracking-wider">{price}</span>
                <a href="#contact" className="border-2 border-black px-3 py-1.5 font-semibold bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
