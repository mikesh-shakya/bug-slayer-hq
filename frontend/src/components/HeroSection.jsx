import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Every Developer Starts
        <br />
        as an <span className="text-purple-400">E-Rank Hunter</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        Level up your skills in DSA, System Design, and Real-World Dev with
        quests, scrolls, and dungeon runs.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-sm font-semibold transition">
        Start Your Quest
      </button>
    </section>
  );
};

export default HeroSection;
