import React, { useEffect, useState } from 'react'
import {
    Modal,
    Table,
    Button,
    Stack
} from 'react-bootstrap'

import { useModalFood } from '../../context/ModalFood'
import { BillServices } from '../../../services/BillServices'
import { FormatCurrency } from '../../utilities/FormatCurrency'
import { TableServices } from '../../../services/TableServices'
const ModalFormBillComponent = ({
    action, setstatus
}) => {

    const { id, show, setshow } = useModalFood()
    const [bill, setbill] = useState(null)
    const [curidTable, setcuridTable] = useState(null)
    const [curItem, setcurItem] = useState([])
    const [curTotalPrice, setcurTotalPrice] = useState(0)
    const handleChekout = async () => {
        try {
            console.log(id, curidTable)
            const res = await BillServices.update(id, { ...bill, status: 'paid' });
            const res1 = await TableServices.pathById(curidTable, { on: true });
            setstatus('Đã thanh toán')
            setshow(false)

        } catch (error) {

        }
    }
    const handlePrint = () => {
        window.print()
    }
    const actions = [handleChekout, handlePrint]
    const titles = ['Thanh toán hóa đơn', 'In hóa đơn']
    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await BillServices.getById(id)
                console.log(res)
                const { idTable, items, totalPrice } = res
                setbill(res)
                setcuridTable(idTable)
                //setcurItem(items || [])
                setcurTotalPrice(totalPrice)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [show])

    const total = curItem.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)
    return (

        <Modal
            show={show}

            centered
        >

            <Modal.Header >
                <Modal.Title>
                    {titles[action]}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="receipt">

                    <h5 className="text-center mb-3">
                        QUÁN ABC
                    </h5>

                    <p>
                        <strong>Bàn:</strong> {curidTable}
                    </p>

                    <p>
                        <strong>Hóa đơn:</strong> {id}
                    </p>

                    <Table
                        bordered
                        size="sm"
                        className="text-center"
                    >

                        <thead>
                            <tr>
                                <th>Món</th>
                                <th>SL</th>
                                <th>Đơn giá</th>
                                <th>Tiền</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                bill?.items?.map((item, index) => {

                                    const {
                                        name,
                                        quantity,
                                        price
                                    } = item

                                    return (
                                        <tr key={index}>
                                            <td>{name}</td>

                                            <td>{quantity}</td>

                                            <td>
                                                {FormatCurrency.formatVND(price)}
                                            </td>

                                            <td>
                                                {
                                                    FormatCurrency.formatVND(
                                                        quantity * price
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </Table>

                    <h5 className="text-end">
                        Tổng:
                        {" "}
                        {FormatCurrency.formatVND(curTotalPrice)}
                    </h5>

                </div>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={() => { setshow(false) }}
                >
                    Hủy
                </Button>

                <Button
                    variant="success"
                    onClick={actions[action]}
                >
                    Xác nhận
                </Button>

            </Modal.Footer>

        </Modal>
    )
}

export default ModalFormBillComponent