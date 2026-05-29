import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/order';

// thêm order

export const addOrder=async(item)=>{
    const time = new Date().toLocaleDateString('vi-VN');
    try{
        console.log("addOrder");
        
        await axios.post(`${BASE_URL}`,item)
        return true
    }catch(err){
        console.log("add order false : "+err);
        return false
        
    }
}

/////////////////////////

// lấy order chưa thanh toán

export const getOrderUnpain=async(idTable)=>{
    try{
        const data = await axios.get(`${BASE_URL}?status=Unpaid&idTable=${idTable}`);
        

    }catch(err){
        console.log("get order unpain false : "+err);
        return false;
        
    }
}

