
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import { LoginComponent } from "./components/LoginComponent.jsx";
import { AdminPage } from "./admin/AdminPage.jsx";
import { StaffMenu } from "./staff/StaffMenu.jsx";
import { FoodGroupsManagement } from "./staff/components/FoodGroupsManagement.jsx";
import { ProfileComponent } from "./components/ProfileComponent.jsx";
import { ChangePasswordComponent } from "./components/ChangePasswordComponent.jsx";
import { StaffListComponent } from "./admin/components/StaffListComponent.jsx";
import { StaffFormComponent } from "./admin/components/StaffFormComponent.jsx";
import HomeComponent from "./components/HomeComponent.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
);

