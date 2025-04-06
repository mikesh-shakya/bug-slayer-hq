const PROGRESS_KEY = "bugslayer-progress";

const getProgress = () => {
  const data = localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : {};
};

const saveProgress = (progress) => {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

const markQuestComplete = (levelId, questId) => {
  const progress = getProgress();
  if (!progress[levelId]) {
    progress[levelId] = { quests: [], bossDefeated: false };
  }
  if (!progress[levelId].quests.includes(questId)) {
    progress[levelId].quests.push(questId);
  }
  saveProgress(progress);
};

const markBossDefeated = (levelId) => {
  const progress = getProgress();
  if (!progress[levelId]) {
    progress[levelId] = { quests: [], bossDefeated: false };
  }
  progress[levelId].bossDefeated = true;
  saveProgress(progress);
};

export default {
  getProgress,
  markQuestComplete,
  markBossDefeated,
};
