import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { HeaderComponent } from "../admin/AdminHeaderComponent";

export const ProfileComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate("/login");
    return null;
  }

  const formatSalary = (salary) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(salary);
  };

  const formatDateDMY = (dateStr) => {
    if (!dateStr) return "";
    // expected storage: yyyy-mm-dd
    const [y, m, d] = String(dateStr).split("-");
    if (!y || !m || !d) return String(dateStr);
    return `${d}-${m}-${y}`;
  };

  const handleChangePass = () => {
    navigate("/change-password", { state: { user } });
  };

  const handleUpdate = () => {
    navigate("/update-profile", { state: { user } });
  };

  const handleBack = () => {
    const path = user.role === "Admin" ? "/admin/staff" : "/staff";
    navigate(path, { state: { user } });
  };

  const infoItems = [
    { label: "Username", value: user.username },
    { label: "Họ và tên", value: user.name },
    { label: "Địa chỉ", value: user.address },
    { label: "Số điện thoại", value: user.tel },
    {
      label: "Chức vụ",
      value: user.role === "Admin" ? "Quản lý" : "Nhân viên",
    },
    { label: "Ngày sinh", value: formatDateDMY(user.birthday) },
    { label: "Giới tính", value: user.gender },
    { label: "Lương", value: formatSalary(user.salary) },
  ];

  return (
    <>
      <HeaderComponent user={user} />
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="cafe-card">
              <div className="card-header text-center">
                <h3 className="mb-0">Thông tin tài khoản</h3>
              </div>
              <div className="p-4">
                <div className="profile-avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </div>
                <h5
                  className="text-center mb-1"
                  style={{ fontFamily: "'Arvo', serif", color: "#DCA237" }}
                >
                  {user.name}
                </h5>
                <p
                  className="text-center mb-4"
                  style={{
                    color: "#999",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {user.role === "Admin" ? "Quản lý" : "Nhân viên"}
                </p>

                <div
                  style={{
                    background: "var(--color-bg-lighter)",
                    borderRadius: "12px",
                    padding: "1rem 1.5rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {infoItems.map((item, idx) => (
                    <div key={idx} className="profile-info-row">
                      <span className="profile-info-label">{item.label}</span>
                      <span className="profile-info-value">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-2 justify-content-center mt-4">
                  <Button
                    className="btn-cafe-warning"
                    onClick={handleChangePass}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
                    Đổi mật khẩu
                  </Button>
                  <Button className="btn-cafe-primary" onClick={handleUpdate}>
                    Cập nhật
                  </Button>
                  <Button className="btn-cafe-secondary" onClick={handleBack}>
                    Quay lại
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
