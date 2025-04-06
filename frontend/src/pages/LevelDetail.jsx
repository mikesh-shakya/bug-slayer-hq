import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import levels from "../data/levels";
import ProgressService from "../services/ProgressService";

const LevelDetail = () => {
  const { levelId } = useParams();
  const level = levels.find((lvl) => lvl.id === levelId);
  const [progress, setProgress] = useState({ quests: [], bossDefeated: false });

  useEffect(() => {
    setProgress(
      ProgressService.getProgress()[levelId] || {
        quests: [],
        bossDefeated: false,
      }
    );
  }, [levelId]);

  const toggleQuest = (quest) => {
    const isCompleted = progress.quests.includes(quest);
    const updatedQuests = isCompleted
      ? progress.quests.filter((q) => q !== quest)
      : [...progress.quests, quest];

    const updatedProgress = { ...progress, quests: updatedQuests };
    setProgress(updatedProgress);
    ProgressService.saveProgress(levelId, updatedProgress);
  };

  const defeatBoss = () => {
    const updatedProgress = { ...progress, bossDefeated: true };
    setProgress(updatedProgress);
    ProgressService.saveProgress(levelId, updatedProgress);
  };

  if (!level) return <div className="p-6 text-white">Level not found</div>;

  return (
    <div className="min-h-[100vh] bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{level.title} - Quests</h1>
      <p className="mb-6 text-zinc-300">{level.description}</p>

      <ul className="space-y-3 mb-8">
        {level.quests.map((quest) => (
          <li
            key={quest}
            className={`p-4 rounded-lg flex justify-between items-center shadow ${
              progress.quests.includes(quest)
                ? "bg-green-600"
                : "bg-zinc-700 hover:bg-zinc-600"
            } transition`}
            onClick={() => toggleQuest(quest)}
          >
            {quest}
            {progress.quests.includes(quest) && <span>✅</span>}
          </li>
        ))}
      </ul>

      <div className="p-4 bg-zinc-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">👹 Boss: {level.boss}</h2>
        {progress.bossDefeated ? (
          <p className="text-green-400">Boss Defeated! 🏆</p>
        ) : (
          <button
            onClick={defeatBoss}
            className="px-4 py-2 mt-2 bg-red-600 rounded hover:bg-red-700"
          >
            Defeat Boss
          </button>
        )}
      </div>
    </div>
  );
};

export default LevelDetail;
