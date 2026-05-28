import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/CustomerRequests';

// thêm yêu cầu 
export const addCustomerRequests =async(item)=>{
    try{
        console.log("addCustomerRequests");
        await axios.post(`${BASE_URL}`,item);
        return true;
        
    }catch(err){
        console.log("add Customer Requests false : "+err);
        return false;
        
    }
}