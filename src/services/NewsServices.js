import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/news';

export const addNews=async(item)=>{
    try{
        console.log("thêm bài đăng");
        
        await axios.post(`${BASE_URL}`,item);
        return true
    }catch(err){
        console.log("add new false : "+err);
        return false
        
    }
}

// lấy toàn bộ bài đăng
export const getAllNews=async()=>{
    try{
        const data = await axios.get(`${BASE_URL}`);
        console.log(data.data);
        return data.data;
        
        
    }catch(err){
        console.log("get all new false : "+err);
        return false
        
    }
}

// lấy thông tin theo id

export const getByIdNews=async(id)=>{
    try{
        const data = await axios.get(`${BASE_URL}?id=${id}`);
        // console.log(data.data[0]);

        return data.data[0];
    }catch(err){
        console.log("get by id new false :" +err);
        return false;
        
    }
}

export const updateByidNews=async(item,id)=>{
    try{
        
        
        const res= await axios.patch(`${BASE_URL}/${id}`,{
            title:item.title,
            content:item.content,
            img:item.img,
            time:item.time
        });
        return true

    }catch(err){
        console.log("update news false : "+err);
        return false
        
    }
}

export const deleteNews= async(id)=>{
    try{
        const res = await axios.delete(`${BASE_URL}/${id}`);
        return true;

    }catch(err){
        console.log("delte new false : "+err);
        return false;
        
    }
}