import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./index.css";
import "./i18n";
import SettingsPopup from "./components/settingPopup";
import Footer from "./components/footer";
import NotFound404 from "./components/notFound404";
import Home from "./home";
import ProjectDetail from "./components/projectDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <SettingsPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
