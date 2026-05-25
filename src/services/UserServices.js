import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL + "/users";

const login = async (username, password) => {
  try {
    const res = await axios.get(BASE_URL);
    const users = Array.isArray(res.data) ? res.data : res.data.data;
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
    return user || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAll = async () => {
  try {
    const res = await axios.get(BASE_URL);
    const users = Array.isArray(res.data) ? res.data : res.data.data;
    return users.sort((a, b) => a.username.localeCompare(b.username));
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getAllStaff = async () => {
  try {
    const res = await axios.get(BASE_URL);
    const staff = Array.isArray(res.data) ? res.data : res.data.data;
    return staff.filter((s) => s.role == "Staff");
  } catch (error) {
    console.log(error);
    return [];
  }
};

const search = async (keyword) => {
  try {
    const res = await axios.get(BASE_URL);
    const users = Array.isArray(res.data) ? res.data : res.data.data;

    const { username, name, tel } = keyword;
    const hasFilter = username || name || tel;

    if (!hasFilter) {
      return users.sort((a, b) => a.username.localeCompare(b.username));
    }

    const filtered = users.filter((u) => {
      const matchUsername =
        username && u.username.toLowerCase().includes(username.toLowerCase());
      const matchName =
        name && u.name.toLowerCase().includes(name.toLowerCase());
      const matchTel = tel && u.tel.includes(tel);
      return matchUsername || matchName || matchTel;
    });

    return filtered.sort((a, b) => a.username.localeCompare(b.username));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const insert = async (data) => {
  try {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const update = async (id, data) => {
  try {
    const res = await axios.patch(`${BASE_URL}/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const remove = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const changePassword = async (id, newPassword) => {
  try {
    const res = await axios.patch(`${BASE_URL}/${id}`, {
      password: newPassword,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UserServices = {
  login,
  getById,
  getAll,
  getAllStaff,
  search,
  insert,
  update,
  remove,
  changePassword,
};
