import axios from "axios";

const API = 'http://localhost:8000/auth'

export const registerApi = async (gmail, name, password, image) => {
    const user = await axios.post(`${API}/register`, { gmail, name, password, image })

    return user
}

export const loginApi = async (gmail, password) => {
    const user = await axios.post(`${API}/login`, { gmail, password })

    return user
}


export const getMyChannel = async (id) => {
    try {
        const user = await axios.get(`${API}/?id=${id}`)

        return user
    } catch (error) {
        console.log(error);
    }
}
