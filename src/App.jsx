mport "./App.css";
import HomePage from "./customer/page/HomePage";
import { Route, Routes } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import { LoginComponent } from "./components/LoginComponent";
import { AdminPage } from "./admin/AdminPage";
import { StaffListComponent } from "./admin/components/StaffListComponent";
import { StaffFormComponent } from "./admin/components/StaffFormComponent";
import { StaffMenu } from "./staff/StaffMenu";
import { FoodGroupsManagement } from "./staff/components/type/FoodGroupsManagement";
import { ProfileComponent } from "./components/ProfileComponent";
import { ChangePasswordComponent } from "./components/ChangePasswordComponent";
import { UpdateProfileComponent } from "./admin/components/UpdateProfileComponent";
import MenuPage from "./customer/page/MenuPage";
import { ToastProvider } from "./components/toast/ToastContext";

function App() {
  return (
    <>
      <ToastProvider>
        <Routes>
          {/* toàn */}

          <Route path={`customer/home`} element={<HomePage />} />
          <Route path={`customer/menu`} element={<MenuPage />} />
          {/* ///////////////////// */}
          {/* kiên */}
          <Route path="/" element={<HomeComponent />} />

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/staff" element={<StaffListComponent />} />
          <Route path="/admin/staff/add" element={<StaffFormComponent />} />
          <Route path="/admin/staff/edit" element={<StaffFormComponent />} />
          <Route path="/staff" element={<StaffMenu />} />
          <Route path="/staff/food-groups" element={<FoodGroupsManagement />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/change-password" element={<ChangePasswordComponent />} />
          <Route path="/admin/update" element={<UpdateProfileComponent />} />
          <Route path="/update-profile" element={<UpdateProfileComponent />} />
          {/* ////////////////////////////// */}
        </Routes>
      </ToastProvider>
    </>
  );
}

export default App;