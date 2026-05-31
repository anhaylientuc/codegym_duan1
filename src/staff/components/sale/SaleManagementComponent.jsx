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
    //const [list, setlist] = useState([])
    const [tables, settables] = useState([])
    const { keyword, setkeyword, id, setid } = useModalFood();
    const [bill, setbill] = useState(undefined)
    const [status, setstatus] = useState(undefined)
    const navigate = useNavigate()
    const handleCheckout = async () => {
        try {
            console.log('api',id)
            const res = await BillServices.update(id, { ...bill, status: 'paid' });
            setstatus('Đã thanh toán')
        } catch (error) {
            
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await TableServices.getByPage(page);
            settables(res.data)
            const arr = res.data
            setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
            if (Array.isArray(arr) && arr.length > 0) {
                setkeyword({ ...keyword, idTable: arr[0].id })
            }
        }
        fetchData();
    }, [page])
    useEffect(() => {
        const fetchData = async () => {
            const res = await BillServices.search(null, keyword);
            const newRes = res.data.find(item => item.status == 'doing' || item.status == 'unpaid')
            if (newRes) {
                setid(newRes.id);
                console.log(newRes.id);
                //setlist(newRes.items)
                setbill(newRes)
                switch (newRes.status) {
                    case 'doing':
                        setstatus('Đang làm món')
                        break;
                    case 'unpaid':
                        setstatus('Chưa thanh toán')
                        break;
                    case 'paid':
                        setstatus('Đã thanh toán')
                        break;
                    default:
                }
            }
            else {
                setbill([])
                setstatus('CÒN TRỐNG')
            }
        }
        fetchData()
    }, [keyword])
    return (
        <Container>
            <Row>
                <Col>
                    <ListTableComponent list={tables} />
                </Col>

                <Col>
                    <ListBillComponent bill={bill} page={page} />
                    <h6>Trạng thái:{status}</h6>
                    <Stack direction='horizontal'
                        className='justify-content-end gap-2' >

                        <Button variant='success' onClick={() => {
                            
                            navigate(`/customer/menu/${keyword.idTable}`)
                        }}
                        >Đặt tiếp món</Button>
                        {status!='Đã thanh toán'&&<Button variant='primary'
                            onClick={() => { handleCheckout() }}
                        >Tính tiền</Button>}
                        {status=='Đã thanh toán'&&<Button variant='secondary'
                        // onClick={()=>{handleCheckout(id,bill)}}
                        >In hóa đơn</Button>}
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