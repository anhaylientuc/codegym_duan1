import { Button, Stack } from "react-bootstrap"
import FormSearchFoodGroupsManagement from "./FormSearchFoodGroupsManagement"
import { FoodGroupsControllers } from "../controllers/FoodGroupsControllers"

import ListFoodGroupsComponent from "./ListFoodGroupsComponent"
import { useState, useEffect } from "react"
import CustomPagination from "./CustomPagination"
import ModalAddFoodGroupsComponent from "./ModalAddFoodGroupsComponent"
export const FoodGroupsManagement = () => {
    const [list, setlist] = useState([])
    const [numPages, setnumPages] = useState(0)
    const [page, setpage] = useState(1)
    const [show, setshow] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const res = await FoodGroupsControllers.handleGetByPage(page);
            setlist(res)
            setnumPages(Math.ceil(res.length / 6));
        }
        fetchData();
    }, [page,show])
    return (
        <Stack>
            <div>
                Danh sách nhóm món
            </div>
            <ModalAddFoodGroupsComponent show={show} setshow={setshow}/>

            <div>
                <FormSearchFoodGroupsManagement
                    setlist={setlist}
                    handleSearch={FoodGroupsControllers.handleSearch} />
            </div>
            <div>
                <Button variant="primary" onClick={()=>{setshow(!show)}}>Thêm</Button>
            </div>
            <div>
                <ListFoodGroupsComponent
                    list={list} />
            </div>
            <div>
                <CustomPagination numPages={numPages} setpage={setpage} page={page} />
            </div>
        </Stack>
    )
}