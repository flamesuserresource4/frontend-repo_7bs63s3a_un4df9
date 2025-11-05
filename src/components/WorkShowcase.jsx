export default function WorkShowcase() {
  const projects = [
    { title: "Noir Coffee", tag: "Logo + Packaging" },
    { title: "Frame Studio", tag: "Brand + Site" },
    { title: "Atlas Dev", tag: "Identity" },
    { title: "Muse Journal", tag: "Editorial Web" },
    { title: "Orbit Pay", tag: "Fintech Brand" },
    { title: "Peak Fitness", tag: "Ecom Web" },
  ];

  return (
    <section id="work" className="border-b border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Selected Work</h2>
          <span className="text-sm text-neutral-600">Hand-picked case studies</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article key={p.title} className="border-2 border-black bg-white">
              <div className="aspect-[4/3] bg-neutral-100 border-b-2 border-black flex items-center justify-center font-black text-2xl md:text-3xl">
                {p.title}
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold">{p.title}</h3>
                  <p className="text-sm text-neutral-600">{p.tag}</p>
                </div>
                <a href="#" className="border-2 border-black px-3 py-1.5 font-semibold bg-white hover:bg-black hover:text-white transition-colors">View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
