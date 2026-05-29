import { Button, Container, Stack, Col, Row } from "react-bootstrap";
import FormSearchFoodGroupsManagement from "./SearchFoodGroupsManagement";
import { FoodGroupsControllers } from "../../controllers/FoodGroupsControllers";

import ListFoodGroupsComponent from "./ListFoodGroupsComponent";
import { useState, useEffect } from "react";
import CustomPagination from "../custom/CustomPagination";
import ModalAddFoodGroupsComponent from "./ModalFoodGroupsComponent";
import { ModalTypeProvider, useModalType } from "../../context/ModalType";
import { FoodGroupsServices } from "../../../services/FoodGroupsServices";

export const FoodGroupsManagement = () => {
<<<<<<< HEAD
    const [list, setlist] = useState([])
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [data,setData]= useState();
    const { show, setshow, setid, id } = useModalType()

    useEffect(() => {
        const fetchData = async () => {
            const res = await FoodGroupsControllers.handleGetByPage(page);
            console.log(res);
            setData(res)
            setlist(res.data)
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        }
        fetchData();
    }, [page, show])
    return (
            <Container>
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <h3>Danh sách nhóm món</h3>
                    </Col>
                </Row>
                <ModalAddFoodGroupsComponent
=======
  const [list, setlist] = useState([]);
  const [numPages, setnumPages] = useState(0);
  const [page, setpage] = useState(1);
  const { show, setshow, setid, id, keyword, setkeyword } = useModalType();
  useEffect(() => {
    const fetchData = async () => {
      const res = await FoodGroupsServices.search(page, keyword);
      console.log(res);
      setlist(res.data);
>>>>>>> dev

      setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
    };
    fetchData();
  }, [page, show, keyword]);
  return (
    <Container>
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <h3>Danh sách nhóm món</h3>
        </Col>
      </Row>
      <ModalAddFoodGroupsComponent />

<<<<<<< HEAD
                <Row className="justify-content-center mb-3">
                    <Col md={8}>
                        <FormSearchFoodGroupsManagement
                            setlist={setlist}
                            handleSearch={FoodGroupsControllers.handleSearch} />
                    </Col>

                </Row>
                <Row className="mb-3">
                    <Col>
                        <Button variant="primary" onClick={() => {
                            setshow(true)
                            console.log(id)
                        }}>Thêm</Button>
                    </Col>
                </Row>
                <Row>
                    <ListFoodGroupsComponent
                        list={list} setshow={setshow} />
                </Row>
                <Row >
                    <Col xs="auto" className="ms-auto">
                        <CustomPagination data={data} as={Col} numPages={numPages} setpage={setpage} page={page} />

                    </Col>
                </Row>
            </Container>


    )
}
=======
      <Row className="justify-content-center mb-3">
        <Col md={8}>
          <FormSearchFoodGroupsManagement
            page={page}
            setpage={setpage}
            setlist={setlist}
            handleSearch={FoodGroupsControllers.handleSearch}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              setshow(true);
              console.log(id);
            }}
          >
            Thêm
          </Button>
        </Col>
      </Row>
      <Row>
        <ListFoodGroupsComponent list={list} setshow={setshow} />
      </Row>
      <Row>
        <Col xs="auto" className="ms-auto">
          <CustomPagination
            as={Col}
            numPages={numPages}
            setpage={setpage}
            page={page}
          />
        </Col>
      </Row>
    </Container>
  );
};
>>>>>>> dev
