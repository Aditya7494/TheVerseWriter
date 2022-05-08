import {useEffect, useState} from 'react';

import {Box} from '@mui/material';
import {getPost} from '../service/api';

import Article from './Article';



const Articles = () => {

    const [post,setPost] = useState([]);

    useEffect(() => {
        dailyPost();
    },[]);

    const dailyPost = async () => {
        let response = await getPost();
        setPost(response.data);
    }

    return(
       <Box>
           {
               post.map(data => (
                   <Article data={data}/>
               ))
           }
       </Box>
    )
}

export default Articles;