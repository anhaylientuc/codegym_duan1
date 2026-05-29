import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert, InputGroup } from "react-bootstrap";
import { UserServices } from "../services/UserServices";

export const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("Vui lòng nhập đầy đủ Username và Password!");
      return;
    }

    const user = await UserServices.login(username, password);
    if (user) {
      if (user.role === "Admin") {
        navigate("/admin", { state: { user } });
      } else if (user.role === "Staff") {
        navigate("/staff", { state: { user } });
      }
    } else {
      setError("Username hoặc Password không đúng!");
    }
  };

  const handleCancel = () => navigate("/");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="card-header text-center">
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#DCA237" }}>☕</div>
          <h3 className="mb-0">Đăng nhập hệ thống</h3>
          <p className="mb-0 mt-1" style={{ color: "#999", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase" }}>
            Cafe Manager
          </p>
        </div>
        <div className="card-body p-4">
          {error && (
            <Alert variant="danger" className="cafe-alert" onClose={() => setError("")} dismissible>
              {error}
            </Alert>
          )}
          <Form className="cafe-form">
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
                Password
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? "Ẩn" : "Hiện"}
                </Button>
              </InputGroup>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button className="btn-cafe-primary" size="lg" onClick={handleLogin}>
                Đăng nhập
              </Button>
              <Button className="btn-cafe-secondary" onClick={handleCancel}>
                Quay lại
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
