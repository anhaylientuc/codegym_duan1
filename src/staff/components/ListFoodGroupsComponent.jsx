import {React} from 'react'
import { Button, Stack, Table } from 'react-bootstrap'
const ListFoodGroupsComponent = ({list}) => {
    return (
        <Table >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã số nhóm</th>
                    <th>Tên nhóm</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    list?list.map((item, index) => {
                        return(
                            <tr key={index}>
                                <th>{index+1}</th>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>
                                    <Stack direction='horizontal'>
                                        <Button variant='warning'>Edit</Button>
                                        <Button variant='danger'>Delete</Button>
                                    </Stack>
                                </th>
                            </tr>
                        )
                    }):null
                }
            </tbody>

        </Table>
    )
}

export default ListFoodGroupsComponent