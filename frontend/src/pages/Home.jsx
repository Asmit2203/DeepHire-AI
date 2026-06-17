import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import LoadingScreen from "../components/LoadingScreen";

import api from "../services/api";
import { useResume } from "../context/ResumeContext";

function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setAnalysis } = useResume();

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post(
        "/analyze/resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setAnalysis(response.data);

      navigate("/results");
    } catch (error) {
      console.error(error);
      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
  return <LoadingScreen />;
}

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-20">
        <Hero />

        <UploadCard
          file={file}
          setFile={setFile}
          loading={loading}
          handleAnalyze={handleAnalyze}
        />
      </section>
    </div>
  );
}

export default Home;