const levels = [
  {
    id: "Level 1",
    title: "Arrays Awakening",
    description: "Master the fundamentals of arrays with basic operations.",
    quests: [
      {
        id: "q1",
        title: "Find the Maximum",
        difficulty: "Easy",
        tags: ["array", "iteration"],
      },
      {
        id: "q2",
        title: "Reverse the Array",
        difficulty: "Easy",
        tags: ["array", "two-pointers"],
      },
    ],
    boss: {
      title: "Subarray with Given Sum",
      difficulty: "Medium",
    },
  },
  {
    id: "Level 2",
    title: "Strings Sanctum",
    description: "Explore string manipulation and pattern recognition.",
    quests: [
      {
        id: "q1",
        title: "Check Palindrome",
        difficulty: "Easy",
        tags: ["string"],
      },
      {
        id: "q2",
        title: "Longest Common Prefix",
        difficulty: "Medium",
        tags: ["string", "trie"],
      },
    ],
    boss: {
      title: "Anagram Groups",
      difficulty: "Medium",
    },
  },
];

export default levels;
