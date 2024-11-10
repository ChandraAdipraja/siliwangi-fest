import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageContainer from "./layout/layout.tsx";
import { HeadContent } from "./features/HeadContent/pages/HeadContent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageContainer>
      <HeadContent />
    </PageContainer>
  </StrictMode>
);
