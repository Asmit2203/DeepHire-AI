import { Upload } from "lucide-react";

function UploadCard({
  file,
  setFile,
  loading,
  handleAnalyze
}) {
  return (
    <div className="mt-16 w-full max-w-2xl">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 backdrop-blur-xl">

        <div className="flex flex-col items-center">

          <Upload size={42} className="mb-4 text-zinc-400" />

          <label className="cursor-pointer">

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            <div className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-white">
              Browse Resume
            </div>

          </label>

          {file && (
            <p className="mt-4 text-zinc-400">
              {file.name}
            </p>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading || !file}
            className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105 disabled:opacity-50"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default UploadCard;