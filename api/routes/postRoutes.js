import express from 'express';
import { createPost, deletePost, getSinglePost, getUserTimeline, likePost, updatePost } from '../controllers/PostController.js';

const router = express.Router();


router.post('/',createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);
router.put('/:id/like',likePost);
router.get('/:id',getSinglePost);
router.get('/timeline/all',getUserTimeline);


export default router;