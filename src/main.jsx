
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import { LoginComponent } from "./components/LoginComponent.jsx";
import { AdminPage } from "./admin/AdminPage.jsx";
import { StaffMenu } from "./staff/StaffMenu.jsx";
import { FoodGroupsManagement } from "./staff/components/type/FoodGroupsManagement.jsx";
import { ProfileComponent } from "./components/ProfileComponent.jsx";
import { ChangePasswordComponent } from "./components/ChangePasswordComponent.jsx";
import { StaffListComponent } from "./admin/components/StaffListComponent.jsx";
import { StaffFormComponent } from "./admin/components/StaffFormComponent.jsx";
import HomeComponent from "./components/HomeComponent.jsx";
import { ModalTypeProvider } from "./staff/context/ModalType.jsx";
import FoodManagementComponent from "./staff/components/food/FoodManagementComponent.jsx";
import { ModalFoodProvider } from "./staff/context/ModalFood.jsx";
import App from "./App.jsx";
import TableManagementComponent from "./staff/components/table/TableManagementComponent.jsx";
import CustomForm from "./staff/components/custom/CustomForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App/>
    </BrowserRouter> */}
    <ModalFoodProvider>
      <FoodManagementComponent />
      {/* <CustomForm fields={[{label:'ma',value:'id'},{label:'ten',value:'name'}]}/> */}
    </ModalFoodProvider>
  </StrictMode>,
);

