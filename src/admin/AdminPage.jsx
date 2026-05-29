import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AdminHeaderComponent } from "./AdminHeaderComponent";

export const AdminPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate("/login");
    return null;
  }

  const menuItems = [
    {
      title: "Quản lý Nhân viên",
      desc: "Thêm, sửa, xóa nhân viên",
      icon: "👥",
      onClick: () => navigate("/admin/staff", { state: { user } }),
    },
    {
      title: "Quản lý Nhóm món",
      desc: "Phân loại món ăn",
      icon: "📋",
      onClick: () => navigate("/staff/food-groups", { state: { user } }),
    },
    {
      title: "Quản lý Món ăn",
      desc: "Thực đơn quán cafe",
      icon: "🍴",
      onClick: () => navigate("/staff/food", { state: { user } }),
    },
    {
      title: "Quản lý Bàn",
      desc: "Sơ đồ bàn phục vụ",
      icon: "💺",
      onClick: () => navigate("/staff/tables", { state: { user } }),
    },
    {
      title: "Quản lý Hóa đơn",
      desc: "Thanh toán & doanh thu",
      icon: "🧾",
      onClick: () => navigate("/staff/bills", { state: { user } }),
    },
    {
      title: "Quản lý bài đăng",
      desc: "quản lý dánh sách bài đăng",
      icon: "📰",
      onClick: () => {navigate("/admin/NewsManagement", { state: { user } })},
    },
  ];

  return (
    <>
      <AdminHeaderComponent user={user} />
      <Container className="dashboard-container">
        <div className="dashboard-welcome">
          <h2>Xin chào, {user.name}!</h2>
          <p>
            Bạn đang đăng nhập với quyền <strong>Quản lý</strong>. Chọn chức
            năng bên dưới để bắt đầu.
          </p>
        </div>

        <Row className="g-3">
          {menuItems.map((item, idx) => (
            <Col key={idx} xs={6} md={4} lg={3}>
              <div className="dashboard-menu-card" onClick={item.onClick}>
                <div className="dashboard-menu-icon">{item.icon}</div>
                <div className="dashboard-menu-title">{item.title}</div>
                <div className="dashboard-menu-desc">{item.desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
