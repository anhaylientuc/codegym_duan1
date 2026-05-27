import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/table';

// lấy toàn bộ danh sách bàn;
export const getAllTable=async()=>{
    try{
        const res= await axios.get(`${BASE_URL}`);
        return res.data;
    }catch(err){
        console.log("get all table false :" +err);
        return false
        
    }
}