import { React, useState, useEffect } from 'react'
import { Button, Stack, Table, Container, Row, Col } from 'react-bootstrap'
import { MdEditNote, MdDelete } from "react-icons/md";
import { useModalFood } from '../../context/ModalFood';
import Form from 'react-bootstrap/Form';
import { TableServices } from '../../../services/TableServices';
const ListTableComponent = ({ list, page }) => {
    const { setshow, setid, action, setaction } = useModalFood();
    const [toggles, settoggles] = useState([])
    useEffect(() => {
        const fetchData = () => {
            settoggles(list.map(item => on))
        }
        fetchData();
    }, [])
    return (
        <Table bordered className='text-center'>
            <thead>
                <tr>
                    <th >STT</th>
                    <th>Số bàn</th>
                    <th>Trạng thái</th>
                    <th>Trống</th>
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
                                <th>{item.state}</th>
                                <th>
                                    <Form.Check
                                        type="switch"
                                        checked={toggles[index]}
                                        onChange={async () => {
                                            await TableServices.update(
                                                item.id,
                                                {
                                                    ...item,
                                                    on: !item.on
                                                }
                                            )
                                            settoggles(toggles.map((item, i) => {
                                                if (i == index)
                                                    return !toggles[i];
                                            }))
                                        }}
                                    />
                                </th>
                                <th>{item.type}</th>
                                <th>
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
                                </th>
                            </tr>
                        )
                    }) : null
                }
            </tbody>

        </Table>
    )
}

export default ListTableComponent