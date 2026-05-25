import { FoodGroupsServices } from "../../services/FoodGroupsServices";
const handleSearch = async (keywords) => {
    try {
        const res = await FoodGroupsServices.search(keywords);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
}
const handleAdd = (values) => {

}
const handleGetAll = async () => {
    try {
        const res = await FoodGroupsServices.getAll();
        return res;
    } catch (error) {
        console.log(error);
    }
}
const handleGetByPage = async (page) => {
    try {
        const res = await FoodGroupsServices.getByPage(page);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const FoodGroupsControllers = { handleSearch, handleGetAll ,handleGetByPage}
