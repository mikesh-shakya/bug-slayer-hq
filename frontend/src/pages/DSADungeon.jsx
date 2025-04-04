import React from "react";
import { Link } from "react-router-dom";

const DSADungeon = () => {
  const topics = [
    "Arrays",
    "Linked Lists",
    "Trees",
    "Graphs",
    "DP",
    "Greedy",
    "Recursion",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🧩 DSA Dungeon</h1>
      <p className="text-center text-slate-400 mb-8">
        Select your next challenge, BugSlayer. Choose wisely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            to={`/dsa-dungeon/${topic.toLowerCase().replace(" ", "-")}`}
            key={topic}
          >
            <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:bg-slate-700 cursor-pointer transition">
              <h2 className="text-xl font-semibold">{topic}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default DSADungeon;