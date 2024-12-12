import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageContainer from "./layout/layout.tsx";
import { HeadContent } from "./features/HeadContent/pages/HeadContent.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMessage from "./features/CreateMessage/pages/CreateMessage.tsx";
import { SearchName } from "./features/SearchName/SearchName.tsx";
import { MessageList } from "./features/admin/MessageList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Rute dengan Layout */}
        <Route path="/" element={<PageContainer />}>
          <Route index element={<HeadContent />} />
          <Route path="create-message" element={<CreateMessage />} />
          <Route path="search-name" element={<SearchName />} />
        </Route>

        {/* Rute tanpa Layout */}
        <Route path="/admin" element={<MessageList />} />
      </Routes>
    </Router>
  </StrictMode>
);
