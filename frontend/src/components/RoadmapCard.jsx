function RoadmapCard({ roadmap }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <h2 className="mb-8 text-2xl font-bold">
        Career Roadmap
      </h2>

      <div className="space-y-6">
        {roadmap?.map((step, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-bold">
              {index + 1}
            </div>

            <p className="text-zinc-300">
              {step.replace(/\*\*/g, "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadmapCard;