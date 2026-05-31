import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/bill'


// toàn

// lấy bill theo bàn

export const getBillByTable =async(idTable)=>{
    try{
        const data = await axios.get(`${BASE_URL}?status_ne=paid&idTable=${idTable}`);
        return data.data[0];
    }catch(err){
        console.log("get bill by id table false : "+err);
        return false;
        
    }
}

// thêm bill ở phía nguwoif dùng

export const addBillClient =async(item)=>{
    try{
        await axios.post(`${BASE_URL}`,item);
        return true
    }catch(err){
        console.log("add bill at client false : "+err);
        return false;
        
    }
}

// cập nhật order của bill

export const updateBillOrder=async(id,items)=>{
    try{
        await axios.patch(`${BASE_URL}/${id}`,items);
        return true
    }catch(err){

    }
}




// ///////////////

// lấy toàn bộ bill
export const getAllBill =async()=>{
    try{
        const res= await axios.get(`${BASE_URL}`);

        
        
        return res.data

    } catch (err) {
        console.log("get all bill false: " + err);
        return false
    }
}

// lấy bill theo trang
const getByPage = async (page) => {
    try {
        const url = BASE_URL + `?_page=${page}&_limit=${6}`
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.log(error)
    }
}

// lấy chi tiết bill theo id
const getById = async (id) => {
    try {
        const url = BASE_URL + `/${id}`;
        const res = await axios.get(url);
        return res.data
    } catch (error) {
        console.log(error)

    }
}


// tìm kiếm bill
const search = async (page,keyword={}) => {

    try {
        const params = new URLSearchParams();
        const { id, from, to,idTable} = keyword
        if (id)
            params.append('id', id);
        if (idTable){
            params.append('idTable', idTable);
        }
        if (from)
            params.append('createdAt_gte', from)
        if (to)
            params.append('createdAt_lte', to)
        if (page)
            params.append('_page', page);
        params.append('_limit', 6);
        const url = BASE_URL + `?${params}`
        console.log(url)
        const res = await axios.get(url);

        return res;
    } catch (error) {
        console.log(error)
    }
}
export const BillServices = { getAllBill, getByPage, getById, search }