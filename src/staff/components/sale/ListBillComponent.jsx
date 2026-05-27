import { React, useEffect,useState } from 'react'
import { Table, Stack, Button } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood'
import { BillServices } from '../../../services/BillServices'
const ListBillComponent = () => {
    const { setid, id } = useModalFood()
    const [ordered, setordered] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const res=await BillServices.getById(id);
                console.log(res)
                setordered(res.ordered)
            }
        }
        fetchData();
    }, [id])
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
                     ordered.map((item, index) => {
                        const { name, quantity, price } = item
                        console.log('ok')
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