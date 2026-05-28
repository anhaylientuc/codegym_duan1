import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import CustomPagination from '../custom/CustomPagination'
import { BillServices } from '../../../services/BillServices'
import ListTableComponent from './ListTableComponent'
import ListBillComponent from './ListBillComponent'
import { ModalFoodProvider } from '../../context/ModalFood'
const SaleManagementComponent = () => {
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [list, setlist] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await BillServices.getByPage(page);
            setlist(res.data)
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        }
        fetchData();
    }, [page])
    return (
            <Container>
                <Row>
                    <Col>
                        <ListTableComponent list={list} />
                    </Col>
                    <Col>
                        <ListBillComponent list={list} page={page} />
                        <Stack direction='horizontal'
                            className='justify-content-end gap-2' >
                            <Button variant='primary'>Tính tiền</Button>
                            <Button variant='warning'>Làm mới bảng</Button>

                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" >
                        <CustomPagination
                            as={Col} numPages={numPages} setpage={setpage} page={page}
                        />

                    </Col>
                </Row>
            </Container>

    )
}

export default SaleManagementComponent