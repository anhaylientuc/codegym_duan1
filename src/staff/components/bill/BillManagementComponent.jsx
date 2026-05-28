import { React, useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ModalFoodProvider, useModalFood } from '../../context/ModalFood'
import CustomForm from '../custom/CustomForm'
import ListBillComponent from './ListBillComponent'
import CustomPagination from '../custom/CustomPagination'
import ModalBillComponent from './ModalBillComponent'
import FormBillComponent from './FormBillComponent'
import { BillServices } from '../../../services/BillServices'
BillServices
const BillManagementComponent = () => {
    const [list, setlist] = useState([])
    const [types, settypes] = useState(null)
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const { show, setshow, setid, id, keyword, setkeyword } = useModalFood()
    const fields = [{ label: 'Số hóa đơn', value: 'id' }, {}]
    const handleSearch = async (values) => {
        console.log('ok')
        const res = await BillServices.search(page, values);
        setpage(1)
        setlist(res.data);
        setkeyword(values);
        setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await BillServices.search(page, keyword);
            setlist(res.data)

            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        }
        fetchData();
    }, [page, show])
    return (
        <ModalFoodProvider>
            <Container>
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <h3>Danh sách hóa đơn</h3>
                    </Col>
                </Row>
                <ModalBillComponent />

                <Row className="justify-content-center mb-3">
                    <FormBillComponent onSubmit={handleSearch} />

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
                    <ListBillComponent
                        list={list} page={page}
                    />
                </Row>
                <Row >
                    <Col xs="auto" className="ms-auto">
                        <CustomPagination
                            as={Col} numPages={numPages} setpage={setpage} page={page}
                        />
                    </Col>
                </Row>
            </Container>
        </ModalFoodProvider>

    )
}

export default BillManagementComponent