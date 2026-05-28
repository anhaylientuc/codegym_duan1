import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";

import App from "./App.jsx";
import TableManagementComponent from "./staff/components/table/TableManagementComponent.jsx";
import CustomForm from "./staff/components/custom/CustomForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
