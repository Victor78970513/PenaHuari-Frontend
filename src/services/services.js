import axios from "axios"
export const getShow = async (category) => {
    const categoria = category
    const apiurl = `http://localhost:3000`
    const apititle = `${apiurl}/${categoria}`
    console.log(apititle)
    const response = await fetch(apititle) 
    const data = await response.json()
    return data;
}
export const getPlatos = async({endPoint})=>{
    const apiURL = 'http://localhost:3000'
    const apiTitle = `${apiURL}${endPoint}`
    const response = await axios.get(apiTitle)
    const data = response.data
    return data;
}