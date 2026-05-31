import { React, useEffect, useState } from 'react'
import { Table, Stack, Button } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood'
import { BillServices } from '../../../services/BillServices'
const ListBillComponent = ({bill=[]}) => {
    const { setid, id, keyword } = useModalFood()

    const {items}=bill
    //const [bill, setbill] = useState(undefined)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await BillServices.search(null, keyword);
    //         const newRes = res.data.find(item => item.status == 'doing' || item.status == 'unpaid')
    //         if (newRes) {
    //            setbill(newRes)

    //         }
    //         else
    //             setdetail([])


    //     }
    //     fetchData();
    // }, [keyword])
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
                                {/* <th>
                                    <Stack direction='horizontal'
                                        className='justify-content-evenly'>


                                        <Button variant='warning' onClick={() => {
                                            console.log(item.id)
                                            setaction(1)
                                            setid(item.id)
                                            setshow(true);
                                        }}>
                                            <MdEditNote size={20} />
                                        </Button>

                                        <Button variant='danger' onClick={() => {
                                            setaction(2)
                                            setid(item.id)
                                            setshow(true)
                                        }}>
                                            <MdDelete />

                                        </Button>
                                    </Stack>
                                </th> */}
                            </tr>
                        )
                    })
                }
            </tbody>

        </Table>
    )
}

export default ListBillComponent