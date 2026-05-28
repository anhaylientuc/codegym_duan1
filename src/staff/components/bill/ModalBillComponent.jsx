import { React, useEffect, useState } from 'react'
import { useModalFood } from '../../context/ModalFood';
import { Modal, Button, Table } from 'react-bootstrap'
import { BillServices } from '../../../services/BillServices';
import FormatDate from '../../utilities/FormatDate';
const ModalBillComponent = () => {
    const { show, setshow, id, setid, action } = useModalFood();
    const [bill, setbill] = useState({})
    const [ordered, setordered] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const res = await BillServices.getById(id);
                console.log(res)
                setbill(res)
                setordered(res.ordered)
                //setinitialValues(res);
            }

        }
        fetchData()
    }, [show])
    return (
        <Modal show={show}
            onHide={()=>setshow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>Thông tin hóa đơn</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Số hóa đơn: {bill.id}</h6>
                <h6>Ngày tạo: {FormatDate(bill.createdAt)}</h6>
                <h6>Người tạo: </h6>
                <h6>Số bàn: {bill.table}</h6>
                <Table>
                    <thead>
                        <tr>
                            <th><h6>STT</h6></th>
                            <th><h6>Tên món</h6></th>
                            <th><h6>Giá</h6></th>
                            <th><h6>Số lượng</h6></th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            ordered && ordered.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{item.name}</th>
                                        <th>{item.price}</th>
                                        <th>{item.quantity}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <h6>Tổng tiền:{bill.totalAmount}</h6>

            </Modal.Body>

        </Modal>
    )
}

export default ModalBillComponent