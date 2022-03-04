import { Home } from "Pages/Home";
import { Quiz } from "Pages/Quiz";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Router: React.FC = () => {
  const [UserName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={UserName}
              setUserName={(name: string) => setUserName(name)}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              name={UserName}
              setUserName={(name: string) => setUserName(name)}
            />
          }
        >
          <Route
            path="/quiz/:tag/:difficulty"
            element={
              <Quiz
                name={UserName}
                setUserName={(name: string) => setUserName(name)}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
