

import {data} from './constants/data.js';
import Post from './model/post-schema.js';

const DefaultData = async () => {
    try{
        
        await Post.insertMany(data);
        console.log('Data imported successfully');
    }catch(error){
        console.log('Error', error.message);
    }
}

export default DefaultData;