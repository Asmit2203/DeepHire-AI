function MissingSkillsCard({ skills }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Missing Skills
      </h2>

      <div className="space-y-4">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800 p-4 text-zinc-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissingSkillsCard;