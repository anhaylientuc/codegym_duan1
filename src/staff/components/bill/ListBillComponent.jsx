import React from 'react'
import { Table, Stack, Button } from 'react-bootstrap'
import { IoMdEye } from "react-icons/io";
import FormatDate from '../../utilities/FormatDate';
import { useModalFood } from '../../context/ModalFood';
const ListBillComponent = ({ list, page }) => {
    const { show, setshow, id, setid, action } = useModalFood();

    return (
        <Table bordered className='text-center'>
            <thead>
                <tr>
                    <th >STT</th>
                    <th>Số hóa đơn</th>
                    <th>Ngày tạo</th>
                    <th>Người tạo</th>
                    <th>Số bàn</th>
                    <th>Tổng tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    list ? list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1 + (page - 1) * 6}</th>
                                <th>{item.id}</th>
                                <th>{FormatDate(item.createdAt)}</th>
                                <th></th>
                                <th>{item.table}</th>
                                <th>{item.totalAmount}</th>
                                <th>
                                    <Button onClick={() => {
                                        setshow(true)
                                        setid(item.id)
                                    }
                                    }>
                                        <IoMdEye />

                                    </Button>
                                </th>
                            </tr>
                        )
                    }) : null
                }
            </tbody>

        </Table>
    )
}

export default ListBillComponent