import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Quiz } from "./Quiz";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
