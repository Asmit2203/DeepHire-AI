import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [analysis, setAnalysis] = useState(null);

  return (
    <ResumeContext.Provider
      value={{
        analysis,
        setAnalysis,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}