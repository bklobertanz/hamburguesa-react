import axios from 'axios'; 

const instance = axios.create({

    baseURL: 'https://my-burger-react-e8d92.firebaseio.com/'
})

export default instance;