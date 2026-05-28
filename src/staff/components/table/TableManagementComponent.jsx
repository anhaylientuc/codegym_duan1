import { React, useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ModalTableComponent from './ModalTableComponent'
import CustomForm from '../custom/CustomForm'
import CustomPagination from '../custom/CustomPagination'
import { ModalFoodProvider, useModalFood } from '../../context/ModalFood'
import { TableServices } from '../../../services/TableServices'
import ListTableComponent from './ListTableComponent'
const TableManagementComponent = () => {
    const [list, setlist] = useState([])
    //const [types, settypes] = useState(null)
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [toggles, settoggles] = useState([])

    const { show, setshow, setid, id, keyword, setkeyword } = useModalFood()
    const fieldFormSearch = [
        { label: 'Mã', value: 'id' },
        { label: 'Trạng thái', value: 'state' }
    ]
    useEffect(() => {
        const fetchData = async () => {
            const res = await TableServices.search(page, keyword);
            console.log(keyword)
            setlist(res.data)
            settoggles(res.data.map(item => item.on))
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        }
        fetchData();
    }, [page, show])
    const handleSubmit = async (values) => {
        console.log(values)
        const res = await TableServices.search(page, values);
        setpage(1)
        setlist(res.data);
        setkeyword(values);
        setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
    }
    return (
        
            <Container>
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <h3>Danh sách nhóm món</h3>
                    </Col>
                </Row>
                <ModalTableComponent

                />

                <Row className="justify-content-center mb-3">
                    <Col md={8}>
                        {/* <FormSearchFoodGroupsManagement
                        setlist={setlist}
                        handleSearch={FoodGroupsControllers.handleSearch} /> */}
                        <CustomForm fields={fieldFormSearch} onSubmit={handleSubmit} />
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
                    <ListTableComponent
                        list={list} page={page} toggles={toggles} settoggles={settoggles} />
                </Row>
                <Row >
                    <Col xs="auto" className="ms-auto">
                        <CustomPagination as={Col}
                            numPages={numPages}
                            setpage={setpage}
                            page={page}
                        />

                    </Col>
                </Row>
            </Container>
       

    )
}

export default TableManagementComponent