import ExpandableCard from "../../components/ui/ExpandableCard";
import systemDesignPlan from "../../data/systemDesignPlan";

const SystemDesignDungeon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">
        ⚙️ Architect's Quest: The 15-Day System Design Dungeon Run
      </h1>

      <div className="my-6 px-4 mx-auto text-white">
        <h2 className="text-2xl font-bold mb-4">📝 Course Description</h2>
        <p className="mb-4">
          <strong>
            Master the art of building scalable, reliable, and efficient systems
            — in just 15 days.
          </strong>
          This structured, no-fluff plan takes you from the foundations of
          system design to real-world architectures like chat apps, video
          platforms, and distributed databases.
        </p>
        <p className="mb-4">
          Whether you're preparing for interviews, leveling up as a backend dev,
          or architecting your next big idea — this course equips you with the
          mental models, patterns, and tools you need to{" "}
          <strong>think like a system designer</strong>.
        </p>
        <p className="mb-4">Each day covers:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            🔍 <strong>Core concepts</strong> (scaling, load balancing, caching,
            etc.)
          </li>
          <li>
            ⚙️ <strong>Real-world design problems</strong> (TinyURL, WhatsApp,
            Netflix, etc.)
          </li>
          <li>
            🎥 <strong>Curated videos</strong> and 🧾{" "}
            <strong>deep-dive articles</strong> per subtopic
          </li>
          <li>
            💡 <strong>A progression</strong> from basic to battle-hardened
            architecture skills
          </li>
        </ul>
        <p className="font-semibold italic text-lg">
          No lectures. Just architecture, battle-tested. 💥
        </p>
        <div className="text-xl md:text-2xl text-center font-extrabold leading-tight mt-6">
          Let's get this{" "}
          <span className="text-purple-500 drop-shadow-sm">Dungeon</span>{" "}
          cleared 🗡️
        </div>
      </div>

      <div className="min-h-screen mx-4 p-3 pt-2 space-y-4">
        {systemDesignPlan.map((dayPlan) => (
          <ExpandableCard
            key={dayPlan.day}
            day={dayPlan.day}
            title={dayPlan.title}
            content={dayPlan.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default SystemDesignDungeon;
