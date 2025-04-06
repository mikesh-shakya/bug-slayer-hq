import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import DSATopic from "./pages/DSATopicTemplate";
import DSADungeon from "./pages/DSADungeon";
import SystemDesignDungeon from "./pages/SystemDesign/SystemDesignDungeon";
import LevelDetail from "./pages/LevelDetail";
import ProblemArena from "./pages/ProblemArena";
import LayoutTemplate from "./pages/LayoutTemplate";

function App() {
  return (
    <Routes>
      <Route element={<LayoutTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/dsa-dungeon" element={<DSADungeon />} />
        <Route path="/dsa-dungeon/:topicId" element={<DSATopic />} />
        <Route path="/system-design" element={<SystemDesignDungeon />} />
        <Route path="/dsa-dungeon/:levelId" element={<LevelDetail />} />
        <Route path="/arena" element={<ProblemArena />} />
      </Route>
    </Routes>
  );
}

export default App;
