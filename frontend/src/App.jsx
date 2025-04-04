import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import DSADungeon from "./pages/DSADungeon";
import DSATopic from "./pages/DSATopicTemplate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dsa-dungeon" element={<DSADungeon />} />
      <Route path="/dsa-dungeon/:topicId" element={<DSATopic />} />
    </Routes>
  );
}

export default App;
