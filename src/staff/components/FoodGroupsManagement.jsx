import { Stack } from "react-bootstrap"
import FormSearchFoodGroupsManagement from "./FormSearchFoodGroupsManagement"
import {FoodGroupsControllers} from "../controllers/FoodGroupsControllers"
import ListFoodGroupsComponent from "./ListFoodGroupsComponent"
import { useState,useEffect } from "react"
export const FoodGroupsManagement = () => {
    const [list, setlist] = useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await FoodGroupsControllers.handleGetAll();
            setlist(res)
        }
        fetchData();
    },[])
    return (
        <Stack>
            <div>
                Danh sách nhóm món
            </div>
            <div>
                <FormSearchFoodGroupsManagement
                    setlist={setlist}
                    handleSearch={FoodGroupsControllers.handleSearch} />
            </div>
            <div>
                <ListFoodGroupsComponent 
                list={list}/>
            </div>
            <div></div>
            <div></div>
        </Stack>
    )
}