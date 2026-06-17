function StrengthsCard({ strengths }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Strengths
      </h2>

      <div className="space-y-4">
        {strengths?.map((strength, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800 p-4 text-zinc-300"
          >
            {strength}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StrengthsCard;