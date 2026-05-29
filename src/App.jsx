import "./App.css";
import HomePage from "./customer/page/HomePage";
import { Route, Routes } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import { LoginComponent } from "./components/LoginComponent";
import { AdminPage } from "./admin/AdminPage";
import { StaffListComponent } from "./admin/components/StaffListComponent";
import { StaffFormComponent } from "./admin/components/StaffFormComponent";
import { StaffMenu } from "./staff/StaffMenu";
import { StaffLayout } from "./staff/StaffLayout";
import { ProfileComponent } from "./components/ProfileComponent";
import { ChangePasswordComponent } from "./components/ChangePasswordComponent";
import { UpdateProfileComponent } from "./admin/components/UpdateProfileComponent";
import MenuPage from "./customer/page/MenuPage";
import { ToastProvider } from "./components/toast/ToastContext";
import TypeComponent from "./staff/components/type/TypeComponent";
import FoodComponent from "./staff/components/food/FoodComponent";
import TableComponent from "./staff/components/table/TableComponent";
import BillComponent from "./staff/components/bill/BillComponent";
import SaleComponent from "./staff/components/sale/SaleComponent";
import IncomeComponent from "./staff/components/income/IncomeComponent";
import { AdminHeaderComponent } from './admin/AdminHeaderComponent'
import Test from './customer/page/test'
import AdminNewsManagement from './admin/AdminNewsManagement'

function App() {
  return (
    <>
      <ToastProvider>
        <Routes>
          {/* toàn */}

          <Route path={`customer/home`} element={<HomePage />} />
          <Route path={`customer/menu`} element={<MenuPage />} />
           <Route path={`customer/test`} element={<Test />} />
         <Route path={`/admin/NewsManagement`} element={<AdminNewsManagement/>}/>
         
          {/* ///////////////////// */}
          {/* kiên */}
          <Route path="/" element={<HomeComponent />} />

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/staff" element={<StaffListComponent />} />
          <Route path="/admin/staff/add" element={<StaffFormComponent />} />
          <Route path="/admin/staff/edit" element={<StaffFormComponent />} />
          <Route path="/staff" element={<StaffMenu />} />
          <Route
            path="/staff/food-groups"
            element={
              <StaffLayout>
                <TypeComponent />
              </StaffLayout>
            }
          />
          <Route
            path="/staff/food"
            element={
              <StaffLayout>
                <FoodComponent />
              </StaffLayout>
            }
          />
          <Route
            path="/staff/tables"
            element={
              <StaffLayout>
                <TableComponent />
              </StaffLayout>
            }
          />
          <Route
            path="/staff/bills"
            element={
              <StaffLayout>
                <BillComponent />
              </StaffLayout>
            }
          />
          <Route
            path="/staff/sale"
            element={
              <StaffLayout>
                <SaleComponent />
              </StaffLayout>
            }
          />
          <Route
            path="/staff/income"
            element={
              <StaffLayout>
                <IncomeComponent />
              </StaffLayout>
            }
          />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route
            path="/change-password"
            element={<ChangePasswordComponent />}
          />
          <Route path="/admin/update" element={<UpdateProfileComponent />} />
          <Route path="/update-profile" element={<UpdateProfileComponent />} />
          {/* ////////////////////////////// */}
        </Routes>
      </ToastProvider>
    </>
  );
}

export default App;
