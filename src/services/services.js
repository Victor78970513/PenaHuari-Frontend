export const getShow = async (category) => {
    const categoria = category
    const apiurl = `http://localhost:3000`
    const apititle = `${apiurl}/${categoria}`
    console.log(apititle)
    const response = await fetch(apititle) 
    const data = await response.json()
    return data;
}