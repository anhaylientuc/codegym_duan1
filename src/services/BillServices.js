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