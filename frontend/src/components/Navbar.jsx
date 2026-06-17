function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

      <h1 className="text-2xl font-bold tracking-tight">
        DeepHire AI
      </h1>

      <a
        href="https://github.com/Asmit2203/DeepHire-AI"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        GitHub
      </a>

    </nav>
  );
}

export default Navbar;