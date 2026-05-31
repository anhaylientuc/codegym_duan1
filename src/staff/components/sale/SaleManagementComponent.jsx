import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import CustomPagination from '../custom/CustomPagination'
import { BillServices } from '../../../services/BillServices'
import ListTableComponent from './ListTableComponent'
import ListBillComponent from './ListBillComponent'
import { ModalFoodProvider, useModalFood } from '../../context/ModalFood'
import { TableServices } from '../../../services/TableServices'
import { useNavigate } from 'react-router-dom'
import ModalFormBillComponent from './ModalFormBillComponent'
const SaleManagementComponent = () => {
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [tables, settables] = useState([])
    const { keyword, setkeyword, id, setid, show, setshow } = useModalFood();
    const [bill, setbill] = useState(undefined)
    const [status, setstatus] = useState(undefined)
    const [action, setaction] = useState(0)
    const navigate = useNavigate()
    const handleCheckout = async () => {
        try {
            const res = await BillServices.update(id, { ...bill, status: 'paid' });
            const selectedTable = tables.find((item) => {
                if (item.id == keyword.idTable)
                    return item;
            })
            const res1 = await TableServices.update(keyword.idTable, { ...selectedTable, on: true });
            setstatus('Đã thanh toán')
        } catch (error) {

        }
    }
    const fetchingTable = async () => {
        const res = await TableServices.getByPage(page);
        settables(res.data)
        const arr = res.data
        setnumPages(Math.ceil(res.headers["x-total-count"] / 6));
        if (Array.isArray(arr) && arr.length > 0) {
            setkeyword({ ...keyword, idTable: arr[0].id })
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await fetchingTable();
        }
        fetchData();
    }, [page])
    useEffect(() => {
        const fetchData = async () => {
            const res = await BillServices.search(null, keyword);
            const newRes = res.data.find(item => item.status == 'doing' || item.status == 'unpaid')
            if (newRes) {
                setid(newRes.id);
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
                setbill(null)
                setstatus('CÒN TRỐNG')
            }
        }
        fetchData()
    }, [keyword])
    return (
        <Container>
            <Row>
                <ModalFormBillComponent action={action} setstatus={setstatus} />
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


                        {bill && status !== 'Đã thanh toán' && (
                            <Button
                                variant='primary'
                                onClick={() => {
                                    //handleCheckout() 
                                    setaction(0)
                                    setshow(true)
                                }}
                            >
                                Tính tiền
                            </Button>
                        )}
                        {bill && status === 'Đã thanh toán' && (
                            <Button
                                variant='secondary'
                                onClick={() => {
                                    setshow(true)
                                    setaction(1);
                                }}
                            >
                                In hóa đơn
                            </Button>
                        )}
                        <Button
                            onClick={() => {
                                setkeyword({ ...keyword })
                                fetchingTable()
                            }}
                            variant='warning'>
                            Làm mới bảng
                        </Button>
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