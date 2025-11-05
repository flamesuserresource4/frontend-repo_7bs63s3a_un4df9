export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold">© {new Date().getFullYear()} BRUTAL STUDIO — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="underline-offset-2 hover:underline">Instagram</a>
          <a href="#" className="underline-offset-2 hover:underline">Dribbble</a>
          <a href="#" className="underline-offset-2 hover:underline">Behance</a>
        </div>
      </div>
    </footer>
  );
}
