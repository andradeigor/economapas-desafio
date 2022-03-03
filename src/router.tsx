import { Home } from "Pages/Home";
import { Quiz } from "Pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
