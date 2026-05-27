import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/bill'

export const getAllBill =async()=>{
    try{
        const res= await axios.get(`${BASE_URL}`);
        return res.data

    }catch(err){
        console.log("get all bill false: "+err);
        return false
    }
}
const getByPage = async (page) => {
    try {
        const url = BASE_URL + `?_page=${page}&_limit=${6}`
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.log(error)
    }
}
const getById = async (id) => {
    try {
        const url = BASE_URL + `/${id}`;
        const res = await axios.get(url);
        return res.data
    } catch (error) {
        console.log(error)

    }
}
export const BillServices={getAllBill,getByPage,getById}