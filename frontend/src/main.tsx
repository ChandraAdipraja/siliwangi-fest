import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageContainer from "./layout/layout.tsx";
import { HeadContent } from "./features/HeadContent/pages/HeadContent.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMessage from "./features/CreateMessage/pages/CreateMessage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <PageContainer>
        <Routes>
          <Route path="/" element={<HeadContent />} />
          <Route path="/create-message" element={<CreateMessage />} />
        </Routes>
      </PageContainer>
    </Router>
  </StrictMode>
);
