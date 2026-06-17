function RolesCard({ roles }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Recommended Roles
      </h2>

      <div className="flex flex-wrap gap-3">
        {roles?.map((role, index) => (
          <div
            key={index}
            className="rounded-full border border-zinc-700 px-4 py-2"
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RolesCard;