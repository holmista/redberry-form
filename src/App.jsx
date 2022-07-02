import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/personalInfo" element={<PersonalInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
