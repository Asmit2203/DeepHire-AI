import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ATSCard from "../components/ATSCard";
import RolesCard from "../components/RolesCard";
import StrengthsCard from "../components/StrengthsCard";
import MissingSkillsCard from "../components/MissingSkillsCard";
import RoadmapCard from "../components/RoadmapCard";

import { useResume } from "../context/ResumeContext";

function Results() {
  const { analysis } = useResume();
  const navigate = useNavigate();

  if (!analysis) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navbar />
      </div>
    );
  }

  const result = analysis.analysis;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="mb-2 text-5xl font-bold">
          Resume Analysis
        </h1>

        <p className="mb-12 text-zinc-500">
          {analysis.filename}
        </p>

        <div className="grid gap-6">

          <ATSCard
            score={result.ats_score}
          />

          <RolesCard
            roles={result.recommended_roles}
          />

          <div className="grid gap-6 md:grid-cols-2">

            <StrengthsCard
              strengths={result.strengths}
            />

            <MissingSkillsCard
              skills={result.missing_skills}
            />

          </div>

          <RoadmapCard
            roadmap={result.roadmap.slice(0, 5)}
          />

        </div>

        <div className="mt-12 flex justify-center">

          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Analyze Another Resume
          </button>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Results;