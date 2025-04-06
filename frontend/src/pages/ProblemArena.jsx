import React, { useEffect, useState } from "react";
import problems from "../data/DSAProblems";
import ProgressService from "../services/ProgressService";

const ProblemArena = () => {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setSolvedProblems(ProgressService.getProgress()["solvedProblems"] || []);
  }, []);

  const toggleSolved = (id) => {
    const updated = solvedProblems.includes(id)
      ? solvedProblems.filter((pid) => pid !== id)
      : [...solvedProblems, id];

    setSolvedProblems(updated);
    ProgressService.saveProgress("solvedProblems", updated);
  };

  const filteredProblems = 
    filter === "All" ? problems.arrays : problems.arrays.filter((p) => p.difficulty === filter);

  return (
    <div className="min-h-[100vh] bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Problem Arena</h1>

      <div className="mb-6 space-x-2">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            className={`px-3 py-1 rounded ${
              filter === level ? "bg-indigo-600" : "bg-zinc-700"
            }`}
            onClick={() => setFilter(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {filteredProblems.map((problem) => (
          <li
            key={problem.id}
            className={`p-4 rounded-lg flex justify-between items-center shadow ${
              solvedProblems.includes(problem.id)
                ? "bg-green-600"
                : "bg-zinc-700 hover:bg-zinc-600"
            } transition`}
          >
            <a
              href={problem.link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {problem.title} ({problem.difficulty})
            </a>
            <button onClick={() => toggleSolved(problem.id)}>
              {solvedProblems.includes(problem.id)
                ? "✅ Solved"
                : "Mark Solved"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemArena;
