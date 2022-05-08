import express from 'express';

import { getPost } from '../controller/post-controller.js';

const route = express.Router();


route.get('/post',getPost );

export default route;