import { React } from 'react'
import { Button, Stack, Table, Container, Row, Col } from 'react-bootstrap'
import { MdEditNote, MdDelete } from "react-icons/md";

const ListFoodGroupsComponent = ({ list, setshow }) => {
    return (
        <Table bordered className='text-center'>
            <thead>
                <tr>
                    <th >STT</th>
                    <th>Mã số nhóm</th>
                    <th>Tên nhóm</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    list ? list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>
                                    <Stack direction='horizontal'
                                        className='justify-content-evenly'>


                                        <Button variant='warning' onClick={() => {
                                            setshow(true);
                                        }}>
                                            <MdEditNote size={20} />
                                        </Button>

                                        <Button variant='danger'>
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

export default ListFoodGroupsComponent