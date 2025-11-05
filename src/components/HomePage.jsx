import Hero from "./Hero";
import Services from "./Services";
import WorkShowcase from "./WorkShowcase";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkShowcase />
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 border-t border-black">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight">Have a project? Let’s build something bold.</h3>
              <p className="mt-4 text-neutral-700 max-w-prose">
                Share a bit about your brand, timeline, and goals. We’ll reply within 24 hours with next steps.
              </p>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <form className="grid gap-3">
                <input type="text" placeholder="Your name" className="w-full border-2 border-black px-3 py-2 focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full border-2 border-black px-3 py-2 focus:outline-none" />
                <input type="text" placeholder="Company / Project" className="w-full border-2 border-black px-3 py-2 focus:outline-none" />
                <textarea placeholder="What do you need?" rows={4} className="w-full border-2 border-black px-3 py-2 focus:outline-none" />
                <button type="button" className="border-2 border-black bg-black text-white px-4 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
                  Request proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
