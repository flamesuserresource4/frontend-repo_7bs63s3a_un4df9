import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border-2 border-black p-1 bg-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-black tracking-tight text-xl">BRUTAL STUDIO</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="underline-offset-2 hover:underline">Services</a>
          <a href="#work" className="underline-offset-2 hover:underline">Work</a>
          <a href="#about" className="underline-offset-2 hover:underline">About</a>
          <a href="#contact" className="underline-offset-2 hover:underline">Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center justify-center border-2 border-black px-3 py-1.5 font-semibold bg-black text-white hover:bg-white hover:text-black transition-colors">
          Start a project
        </a>
      </div>
    </header>
  );
}
