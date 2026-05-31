import { React, useEffect, useState } from 'react'
import { Table, Stack, Button } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood'
import { BillServices } from '../../../services/BillServices'
const ListBillComponent = ({bill=[]}) => {
    const { setid, id, keyword } = useModalFood()

   const items = bill?.items || []
    return (
        <Table bordered className='text-center'>
            <thead>
                <tr>
                    <th >STT</th>
                    <th>Tên món</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Số bàn</th>
                    <th>Tổng tiền</th>
                </tr>
            </thead>
            <tbody>
                {
                    items && items.map((item, index) => {
                        const { name, quantity, price } = item
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{name || ''}</th>
                                <th>{quantity || ''}</th>
                                <th>{price || ''}vnd</th>
                                <th>{id}</th>
                                <th>{price * quantity || ''}</th>
                              
                            </tr>
                        )
                    })
                }
            </tbody>

        </Table>
    )
}

export default ListBillComponent