import axios from 'axios';


export const getPost = async () => {
    const URL = 'http://localhost:8000';

    try{
       return await axios.get(`${URL}/post`);
    }catch(error){
        console.log('error while calling get news api',error);
    }
}