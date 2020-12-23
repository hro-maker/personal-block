import axios from 'axios';
export default axios.create(
    {
        baseURL:'https://personal-blockk-default-rtdb.firebaseio.com/'
    }
)