import axios from "axios"
import Cookies from "js-cookie";


export const urlAPI = "http://localhost:3000";
export const cekLogin = async() => {
    const token = Cookies.get("token")
    const username = Cookies.get("username")

    const formData = new FormData()
    formData.append("username", username)
    formData.append("token", token)

    try {
        const result = await axios.post(`${urlAPI}/client/cekLogin`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        return result
    } catch (error) {
        return false
    }
    
}

export const instance = async() => {
    try {
        const token = Cookies.get("token")
        if(!token) return false

        const result = axios.create({
            baseURL: urlAPI,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": token
            }
        })
        return result

    } catch (error) {
        console.log({error})
        return false
    }
}