import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Form,
  Row,
  Col,
  Alert,
  Pagination,
  Modal,
} from "react-bootstrap";
import { HeaderComponent } from "../AdminHeaderComponent";
import { UserServices } from "../../services/UserServices";

const PAGE_SIZE = 10;

export const StaffListComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [staffList, setStaffList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchUsername, setSearchUsername] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchTel, setSearchTel] = useState("");
  const [notFound, setNotFound] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);

  if (!user) {
    navigate("/login");
    return null;
  }

  const fetchStaff = async () => {
    const data = await UserServices.getAllStaff();
    setStaffList(data);
    setFilteredList(data);
    setNotFound(false);
    setPage(1);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleSearch = async () => {
    const keyword = {
      username: searchUsername.trim(),
      name: searchName.trim(),
      tel: searchTel.trim(),
    };
    const result = await UserServices.search(keyword);
    setFilteredList(result);
    setPage(1);
    setNotFound(result.length === 0);
  };

  const handleAddNew = () => {
    navigate("/admin/staff/add", { state: { user } });
  };

  const handleEdit = (staff) => {
    navigate("/admin/staff/edit", { state: { user, staff } });
  };

  const handleDeleteClick = (staff) => {
    setStaffToDelete(staff);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (staffToDelete) {
      await UserServices.remove(staffToDelete.id);
      setShowDeleteModal(false);
      setStaffToDelete(null);
      fetchStaff();
    }
  };

  const totalPages = Math.ceil(filteredList.length / PAGE_SIZE);
  const pagedList = filteredList.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
          {i}
        </Pagination.Item>,
      );
    }
    return (
      <Pagination
        size="sm"
        className="cafe-pagination justify-content-center mt-3"
      >
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        {items}
        <Pagination.Next
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        />
      </Pagination>
    );
  };

  return (
    <>
      <HeaderComponent user={user} />
      <Container className="py-4">
        <div className="cafe-card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h4 className="mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="me-2"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
              </svg>
              Quản lý nhân viên
            </h4>
            <Button className="btn-cafe-primary" onClick={handleAddNew}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="me-1"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Thêm nhân viên
            </Button>
          </div>
          <div className="p-4">
            <div className="cafe-search-bar">
              <Row className="g-2 align-items-end">
                <Col xs={12} md={3}>
                  <Form.Label
                    className="fw-semibold"
                    style={{
                      fontSize: "0.8rem",
                      color: "#DCA237",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tìm username..."
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Form.Label
                    className="fw-semibold"
                    style={{
                      fontSize: "0.8rem",
                      color: "#DCA237",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Tên
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tìm tên..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Form.Label
                    className="fw-semibold"
                    style={{
                      fontSize: "0.8rem",
                      color: "#DCA237",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    SĐT
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tìm SĐT..."
                    value={searchTel}
                    onChange={(e) => setSearchTel(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Button
                    className="btn-cafe-primary w-100"
                    onClick={handleSearch}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    Tìm kiếm
                  </Button>
                </Col>
              </Row>
            </div>

            {notFound && (
              <Alert variant="warning" className="cafe-alert text-center">
                Không tìm thấy kết quả!
              </Alert>
            )}

            <Table responsive className="cafe-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Tên</th>
                  <th>Địa chỉ</th>
                  <th>SĐT</th>
                  <th>Giới tính</th>
                  <th>Chức vụ</th>
                  <th>Ngày sinh</th>
                  <th>Lương</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {pagedList.map((staff, index) => (
                  <tr key={staff.id}>
                    <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                    <td>
                      <strong style={{ color: "#DCA237" }}>
                        {staff.username}
                      </strong>
                    </td>
                    <td style={{ color: "#FFFFFF" }}>{staff.name}</td>
                    <td>{staff.address}</td>
                    <td>{staff.tel}</td>
                    <td>{staff.gender}</td>
                    <td>
                      <span
                        style={{
                          background:
                            staff.role === "Admin"
                              ? "rgba(220,162,55,0.15)"
                              : "rgba(76,175,80,0.15)",
                          color: staff.role === "Admin" ? "#DCA237" : "#4CAF50",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          border: `1px solid ${staff.role === "Admin" ? "rgba(220,162,55,0.3)" : "rgba(76,175,80,0.3)"}`,
                        }}
                      >
                        {staff.role}
                      </span>
                    </td>
                    <td>{staff.birthday}</td>
                    <td>
                      {new Intl.NumberFormat("vi-VN").format(staff.salary)} đ
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        <Button
                          className="btn-cafe-success"
                          size="sm"
                          onClick={() => handleEdit(staff)}
                        >
                          Sửa
                        </Button>
                        <Button
                          className="btn-cafe-danger"
                          size="sm"
                          onClick={() => handleDeleteClick(staff)}
                        >
                          Xóa
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {pagedList.length === 0 && !notFound && (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-4"
                      style={{ color: "#999" }}
                    >
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {renderPagination()}
          </div>
        </div>
      </Container>

      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        className="cafe-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <p className="mb-0">
            Bạn có chắc chắn muốn xóa nhân viên{" "}
            <strong style={{ color: "#DCA237" }}>{staffToDelete?.name}</strong>{" "}
            ({staffToDelete?.username}) không?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-cafe-secondary"
            onClick={() => setShowDeleteModal(false)}
          >
            Hủy
          </Button>
          <Button className="btn-cafe-danger" onClick={handleConfirmDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
