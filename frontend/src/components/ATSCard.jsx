function ATSCard({ score }) {
  const getColor = () => {
    if (score >= 80) {
      return "text-green-400 border-green-400";
    }

    if (score >= 60) {
      return "text-yellow-400 border-yellow-400";
    }

    return "text-red-400 border-red-400";
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">

      <p className="text-zinc-500">
        ATS SCORE
      </p>

      <div className="mt-8 flex flex-col items-center">

        <div
          className={`flex h-40 w-40 items-center justify-center rounded-full border-4 ${getColor()}`}
        >
          <span className={`text-6xl font-bold ${getColor()}`}>
            {score}
          </span>
        </div>

        <p className="mt-4 text-zinc-500">
          out of 100
        </p>

      </div>

    </div>
  );
}

export default ATSCard;