import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/foodgroups';
const getAll = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
const search = async (keyword) => {
    
    try {
        console.log(keyword)
        const params=new URLSearchParams();
        Object.entries(keyword).forEach(([key,value])=>{
            params.append(key,value)
        })
        const url=BASE_URL+`?${params}`
        console.log(url)
        const res = await axios.get(url);
        console.log(res)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const FoodGroupsServices = { getAll,search }
