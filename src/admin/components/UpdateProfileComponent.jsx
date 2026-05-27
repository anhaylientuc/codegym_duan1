import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Form, Alert } from "react-bootstrap";
import { HeaderComponent } from "../AdminHeaderComponent";
import { UserServices } from "../../services/UserServices";

export const UpdateProfileComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    address: "",
    tel: "",
    gender: "Nam",
    birthday: "",
    salary: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        name: user.name || "",
        address: user.address || "",
        tel: user.tel || "",
        gender: user.gender || "Nam",
        birthday: user.birthday || "",
        salary: user.salary ?? "",
      });
    }
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setMessage({ text: "", type: "" });

    if (!formData.name || !formData.tel) {
      setMessage({
        text: "Vui lòng nhập đầy đủ Họ tên và Số điện thoại!",
        type: "danger",
      });
      return;
    }

    const dataToSave = {
      ...user,
      name: formData.name,
      address: formData.address,
      tel: formData.tel,
      gender: formData.gender,
      birthday: formData.birthday,
      salary: Number(formData.salary) || 0,
    };

    const result = await UserServices.update(user.id, dataToSave);
    if (result) {
      const updatedUser = { ...user, ...dataToSave };
      alert("Cập nhật thông tin thành công!");
      navigate("/profile", { state: { user: updatedUser } });
    } else {
      setMessage({ text: "Cập nhật thất bại!", type: "danger" });
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
          <Col xs={12} md={8} lg={6}>
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
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="mb-0">Cập nhật thông tin tài khoản</h4>
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
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Nhập địa chỉ"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="text"
                      name="tel"
                      placeholder="Nhập số điện thoại"
                      value={formData.tel}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Lương</Form.Label>
                    <Form.Control
                      type="number"
                      name="salary"
                      placeholder="Nhập lương"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-flex gap-2 justify-content-center">
                    <Button className="btn-cafe-primary" onClick={handleSubmit}>
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
