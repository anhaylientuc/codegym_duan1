import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import CustomPagination from '../custom/CustomPagination'
import { BillServices } from '../../../services/BillServices'
import ListTableComponent from './ListTableComponent'
import ListBillComponent from './ListBillComponent'
import { ModalFoodProvider, useModalFood } from '../../context/ModalFood'
import { TableServices } from '../../../services/TableServices'
 import { useNavigate } from 'react-router-dom'
const SaleManagementComponent = () => {
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [list, setlist] = useState([])
     const [tables, settables] = useState([])
    const {keyword,setkeyword}=useModalFood();
    const navigate=useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const res = await TableServices.getByPage(page);
            setlist(res.data)
            const arr=res.data
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
            if(Array.isArray(arr)&&arr.length>0){
                console.log(arr[0])
                setkeyword({...keyword, idTable:arr[0].id})

            }
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
                            <h6>Trạng thái:</h6>
                            <Button variant='success' onClick={()=>{
                                navigate(`/customer/menu/${keyword.idTable}`)
                            }}
                            >Đặt</Button>
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