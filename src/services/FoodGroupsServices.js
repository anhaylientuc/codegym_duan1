import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/foodGroups';


// lấy toàn bộ danh sách món
export const getAll = async () => {
    try {
        console.log("vào hàm get all");
        
        const res = await axios.get(BASE_URL);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// lấy theo theo số page
const getByPage = async (page) => {
    try {
        const url = BASE_URL + `?_page=${page}&_per_page=${6}`
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error)
        return false;
    }
}


// tìm kiếm
const search = async (keyword) => {

    try {
        const params = new URLSearchParams();
        Object.entries(keyword).forEach(([key, value]) => {
            params.append(key, value)
        })
        const url = BASE_URL + `?${params}`
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// thêm danh sách món
const insert = async (data) => {
    try {
        const res = await axios.post(BASE_URL, data);
        return res.data;
    } catch (error) {
        console.log(error)

    }
}


export const FoodGroupsServices = { getAll, search, getByPage,insert }
