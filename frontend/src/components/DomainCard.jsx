function DomainCard({ domain }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">

      <p className="text-zinc-500">
        CAREER DOMAIN
      </p>

      <h2 className="mt-6 text-4xl font-bold">
        {domain}
      </h2>

    </div>
  );
}

export default DomainCard;