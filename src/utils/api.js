import axios from "./axios.customize";

const createUserApi = (request) => {
    const URL_API = "/users/create";
    return axios.post(URL_API, request)
}

const loginApi = (request) => {
    const URL_API = "/auths/login";
    return axios.post(URL_API, request)
}

const user = () => {
    const URL_API = "/main/home/user"
    return axios.get(URL_API);
}

const getByEmail = (email) => {
    const URL_API = "/users";
    return axios.get(`/users/${email}`);
}

const getAllProduct = () => {
    const URL_API = "/main/products";
    return axios.get(URL_API);
}

const getProductById = (id) => {
    const URL_API = "/main/product";
    return axios.get(`${URL_API}/${id}`);
}

// const paymentVNPAY = (paymentRequest) => {
//     const URL_API = "/payments/create-payment";
//     return axios.post(URL_API, { paymentRequest });
// }

const paymentVNPAY = (paymentRequest) => {
    console.log("Payment Request Params:", paymentRequest);  // Log the data being sent to the API
    const URL_API = "/payments/create-payment";
    return axios.post(URL_API,paymentRequest);
  };
export {
    createUserApi,
    loginApi,
    user,
    getByEmail,
    getAllProduct,
    getProductById,
    paymentVNPAY
}