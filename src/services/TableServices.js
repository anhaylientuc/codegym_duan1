import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/tables';
const getAll = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res.data;
    } catch (error) {
        console.log(error)
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
const search = async (page,keyword) => {

    try {
        const params = new URLSearchParams();
        Object.entries(keyword).forEach(([key, value]) => {
            params.append(key + '_like', value)
        })
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
const insert = async (data) => {
    try {
        const res = await axios.post(BASE_URL, data);
        return res.data;
    } catch (error) {
        console.log(error)

    }
}
const update = async (id, data) => {
    try {
        const url = BASE_URL + `/${id}`;
        const res = await axios.put(url, data);
        console.log(res)
        return res.data

    } catch (error) {
        console.log(error)
    }
}
const remove = async (id) => {
    try {
        const url = BASE_URL + `/${id}`;
        const res = await axios.delete(url);
        return res.data
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
export const TableServices = { getAll, search, getByPage, insert, update, remove, getById }
