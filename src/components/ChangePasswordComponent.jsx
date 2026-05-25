import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Form, Alert } from "react-bootstrap";
import { HeaderComponent } from "../admin/AdminHeaderComponent";
import { UserServices } from "../services/UserServices";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

export const ChangePasswordComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleUpdate = async () => {
    setMessage({ text: "", type: "" });

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage({ text: "Vui lòng nhập đầy đủ thông tin!", type: "danger" });
      return;
    }

    if (currentPassword !== user.password) {
      setMessage({ text: "Mật khẩu hiện tại không đúng!", type: "danger" });
      return;
    }

    if (!PASSWORD_REGEX.test(newPassword)) {
      setMessage({
        text: "Mật khẩu mới không hợp lệ! (tối thiểu 6 ký tự, gồm chữ và số)",
        type: "danger",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ text: "Xác nhận mật khẩu không khớp!", type: "danger" });
      return;
    }

    const result = await UserServices.changePassword(user.id, newPassword);
    if (result) {
      const updatedUser = { ...user, password: newPassword };
      alert("Cập nhật password thành công!");
      navigate("/profile", { state: { user: updatedUser } });
    } else {
      setMessage({
        text: "Đổi mật khẩu thất bại, vui lòng thử lại!",
        type: "danger",
      });
    }
  };

  const handleCancel = () => {
    navigate("/profile", { state: { user } });
  };

  return (
    <>
      <HeaderComponent user={user} />
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5}>
            <div className="cafe-card">
              <div className="card-header text-center">
                <div style={{ marginBottom: "0.3rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                  </svg>
                </div>
                <h3 className="mb-0">Đổi mật khẩu</h3>
              </div>
              <div className="p-4">
                {message.text && (
                  <Alert
                    variant={message.type}
                    className="cafe-alert"
                    onClose={() => setMessage({ text: "", type: "" })}
                    dismissible
                  >
                    {message.text}
                  </Alert>
                )}
                <Form className="cafe-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu hiện tại</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu hiện tại"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Form.Text>
                      Tối thiểu 6 ký tự, bao gồm chữ cái và chữ số
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập lại mật khẩu mới"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-flex gap-2 justify-content-center">
                    <Button className="btn-cafe-primary" onClick={handleUpdate}>
                      Cập nhật
                    </Button>
                    <Button
                      className="btn-cafe-secondary"
                      onClick={handleCancel}
                    >
                      Hủy bỏ
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
