import axios from "axios";


const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});


const addToken = token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    
}
const signup = async (data)=> {
    const {data: result} = await instance.post("/users/signup", data);
    addToken(result.token);
    return result.data;
}

const login = async (data) => {
    const {data: result} = await instance.post("/users/login", data);
    addToken(result.token);
    return result;
}

const logout = async () => {
    const {data: result} = await instance.post("/users/logout");
    axios.defaults.headers.common.Authorization = "";
    return result;
}

const getCurrent = async (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
    const {data: result} = await axios.get("/users/current");
    return result;
}




const authAPI = {
    signup,
    login,
    logout,
    getCurrent
};

export default authAPI;