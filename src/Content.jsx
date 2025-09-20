import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Quiz3 } from "./Quiz3";
import { StudyGuide4 } from "./StudyGuide4";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/studyguide4" element={<StudyGuide4 />} />
      </Routes>
    </div>
  );
}
