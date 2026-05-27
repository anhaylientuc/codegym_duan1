import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { HeaderComponent } from "../AdminHeaderComponent";
import { UserServices } from "../../services/UserServices";

export const StaffFormComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const editStaff = location.state?.staff;
  const isEdit = !!editStaff;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
    tel: "",
    gender: "Nam",
    role: "Staff",
    birthday: "",
    salary: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (editStaff) {
      setFormData({
        username: editStaff.username || "",
        password: editStaff.password || "",
        name: editStaff.name || "",
        address: editStaff.address || "",
        tel: editStaff.tel || "",
        gender: editStaff.gender || "Nam",
        role: editStaff.role || "Staff",
        birthday: editStaff.birthday || "",
        salary: editStaff.salary || "",
      });
    }
  }, []);

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

    if (!formData.username || !formData.name || !formData.tel) {
      setMessage({
        text: "Vui lòng nhập đầy đủ Username, Tên và SĐT!",
        type: "danger",
      });
      return;
    }

    if (!isEdit && !formData.password) {
      setMessage({ text: "Vui lòng nhập Password!", type: "danger" });
      return;
    }

    if (!isEdit) {
      const usernameExists = await UserServices.checkUsernameExists(
        formData.username,
      );
      if (usernameExists) {
        setMessage({
          text: "Username đã tồn tại! Vui lòng chọn username khác.",
          type: "danger",
        });
        return;
      }
    }

    const dataToSave = {
      ...formData,
      salary: Number(formData.salary) || 0,
    };

    if (isEdit) {
      const result = await UserServices.update(editStaff.id, dataToSave);
      if (result) {
        alert("Cập nhật nhân viên thành công!");
        navigate("/admin/staff", { state: { user } });
      } else {
        setMessage({ text: "Cập nhật thất bại!", type: "danger" });
      }
    } else {
      const allUsers = await UserServices.getAll();
      const maxId = allUsers.reduce((max, u) => {
        const num = parseInt(u.id.replace("U", ""), 10);
        return num > max ? num : max;
      }, 0);
      dataToSave.id = `U${String(maxId + 1).padStart(3, "0")}`;

      const result = await UserServices.insert(dataToSave);
      if (result) {
        alert("Thêm nhân viên thành công!");
        navigate("/admin/staff", { state: { user } });
      } else {
        setMessage({ text: "Thêm nhân viên thất bại!", type: "danger" });
      }
    }
  };

  const handleCancel = () => {
    navigate("/admin/staff", { state: { user } });
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
                  {isEdit ? (
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                    </svg>
                  )}
                </div>
                <h4 className="mb-0">
                  {isEdit ? "Chỉnh sửa nhân viên" : "Thêm mới nhân viên"}
                </h4>
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
                      placeholder="Nhập username"
                      value={formData.username}
                      onChange={handleChange}
                      disabled={isEdit}
                    />
                  </Form.Group>

                  {!isEdit && (
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Nhập password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nhập tên nhân viên"
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

                  <Row className="mb-3">
                    <Col>
                      <Form.Group>
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
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Chức vụ</Form.Label>
                        <Form.Select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <option value="Staff">Staff</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

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
                      {isEdit ? "Cập nhật" : "Thêm mới"}
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
