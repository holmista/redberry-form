import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import ExperiencePage from "./pages/ExperiencePage";
import CompletedPage from "./pages/CompletedPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/personalInfo" element={<PersonalInfoPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/experienceInfo" element={<ExperiencePage />} />
          <Route path="/completed" element={<CompletedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
