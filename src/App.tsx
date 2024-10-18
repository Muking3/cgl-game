import { Route, Routes } from 'react-router-dom';
import Quiz from "@/pages/quiz";
import AnswerQuiz from "@/pages/answerQuiz";
import HomePage from "@/pages/homePage";
import Register from "@/pages/register";

export default function App() {
  return (
    <>
      <div className="py-4 px-2 laptop:py-10 laptop:px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* <Route path="/answer" element={<AnswerQuiz />} /> */}
          <Route path="/quiz/:quizId" element={<AnswerQuiz />} />
        </Routes>
      </div>
    </>
  );
};