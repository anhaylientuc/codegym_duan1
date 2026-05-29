import { useLocation, useNavigate } from "react-router-dom";
import { HeaderComponent } from "../admin/AdminHeaderComponent";

export const StaffLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <HeaderComponent user={user} />
      {children}
    </>
  );
};
