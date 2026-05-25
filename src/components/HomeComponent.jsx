import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-logo">☕</div>
        <h1 className="landing-title">High Quality COFFEE</h1>
        <p className="landing-subtitle">Hệ thống quản lý quán cafe chuyên nghiệp</p>
        <button className="landing-btn" onClick={() => navigate("/login")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
          Đăng nhập
        </button>

        <div className="landing-features">
          <div className="landing-feature">
            <div className="landing-feature-icon">👥</div>
            <div className="landing-feature-text">Quản lý nhân viên</div>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">🍴</div>
            <div className="landing-feature-text">Quản lý thực đơn</div>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">💺</div>
            <div className="landing-feature-text">Quản lý bàn</div>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">🧾</div>
            <div className="landing-feature-text">Quản lý hóa đơn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
