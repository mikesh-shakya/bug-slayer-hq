import React, { useEffect, useState } from "react";
import levels from "../data/levels";
import { Link } from "react-router-dom";
import ProgressService from "../services/ProgressService";

const DSADungeon = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(ProgressService.getProgress());
  }, []);

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">DSA Dungeon 🧩</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levels.map((level) => {
          const levelProgress = progress[level.id] || {
            quests: [],
            bossDefeated: false,
          };

          const totalQuests = level.quests.length;
          const completedQuests = levelProgress.quests.length;

          return (
            <div
              key={level.id}
              className="bg-zinc-700 rounded-xl p-5 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{level.title}</h2>
              <p className="text-zinc-300 mb-4">{level.description}</p>

              <div className="mb-2">
                🧪 Quests: {completedQuests} / {totalQuests}
              </div>

              <div className="mb-4">
                👹 Boss:{" "}
                {levelProgress.bossDefeated ? (
                  <span className="text-green-400">Defeated</span>
                ) : (
                  <span className="text-red-400">Undefeated</span>
                )}
              </div>

              <Link
                to={`/dsa-dungeon/${level.id.toLowerCase().replace(" ", "-")}`}
              >
                <button className="mt-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Enter Level →
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DSADungeon;
