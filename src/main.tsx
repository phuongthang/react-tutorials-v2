import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./tailwind.css";
import "./i18n/i18n.ts";
createRoot(document.getElementById("root")!).render(<App />);
