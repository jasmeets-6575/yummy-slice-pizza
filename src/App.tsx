import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, ErrorPage, Dashboard } from "./pages";
import "./app.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
