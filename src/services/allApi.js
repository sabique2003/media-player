import axios from "axios";

const baseurl="https://mediaplayer-server-sco1.onrender.com"
export const addVideo=async(data)=>{
    return await axios.post(`${baseurl}/video`,data)
}

export const getVideo=async()=>{
    return await axios.get(`${baseurl}/video`)
}

export const deleteVideo=async(id)=>{
    return await axios.delete(`${baseurl}/video/${id}`)
}

export const addCategory=async(data)=>{
    return await axios.post(`${baseurl}/category`,data)
}
export const getCategories=async()=>{
    return await axios.get(`${baseurl}/category`)
}
export const deleteCategory=async(id)=>{
    return await axios.delete(`${baseurl}/category/${id}`)
}
export const addHistory=async(data)=>{
    return await axios.post(`${baseurl}/history`,data)
}
export const getHistory=async()=>{
    return await axios.get(`${baseurl}/history`)
}
export const deleteHistory=async(id)=>{
    return await axios.delete(`${baseurl}/history/${id}`)

}
export const updateCategory=async(id,data)=>{
    return await axios.put(`${baseurl}/category/${id}`,data)
}
export const checkEmailApi=async(email)=>{
    return await axios.get(`${baseurl}/users?email=${email}`)
}
export const registerApi=async(data)=>{
    return await axios.post(`${baseurl}/users`,data)
}
export const loginApi=async(email,password)=>{
    return await axios.get(`${baseurl}/users?email=${email}&password=${password}`)
}