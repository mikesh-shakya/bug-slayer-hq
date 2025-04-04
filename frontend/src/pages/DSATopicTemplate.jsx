import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dsaProblems from "../data/DSAProblems";

const DSATopicTemplate = () => {
  const { topicId } = useParams();
  const problems = dsaProblems[topicId] || [];
    const storageKey = `progress-${topicId}`;
    const [progress, setProgress] = useState({});

    // Load progress from localStorage
    useEffect(() => {
      const savedProgress = JSON.parse(localStorage.getItem(storageKey)) || {};
      setProgress(savedProgress);
    }, [topicId]);

    // Handle checkbox toggle
    const toggleCheckbox = (id) => {
      const updated = { ...progress, [id]: !progress[id] };
      setProgress(updated);
      localStorage.setItem(storageKey, JSON.stringify(updated));
    };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center capitalize">
        {topicId.replace("-", " ")} 🛡️
      </h1>
      <p className="text-center text-slate-400 mt-4 capitalize">
        Welcome to the {topicId.replace("-", " ")} chamber. Begin your training!
      </p>

      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        {problems.length > 0 ? (
          problems.map((prob) => (
            <div
              key={prob.id}
              className="bg-slate-800 p-4 rounded-lg shadow hover:bg-slate-700 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{prob.title}</h3>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    prob.difficulty === "Easy"
                      ? "bg-green-600"
                      : prob.difficulty === "Medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {prob.difficulty}
                </span>
                <input
                  type="checkbox"
                  checked={progress[prob.id] || false}
                  onChange={() => toggleCheckbox(prob.id)}
                  className="w-5 h-5 accent-indigo-500"
                  title="Mark as Completed"
                />
              </div>
              <a
                href={prob.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 text-sm underline mt-2 inline-block"
              >
                Go to Problem
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-400">
            No problems available yet for this topic.
          </p>
        )}
      </div>
    </main>
  );
};

export default DSATopicTemplate;
