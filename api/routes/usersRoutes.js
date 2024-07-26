import express from "express";
import {
  deleteUser,
  followUser,
  getFriends,
  getSingleUser,
  unfollowUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/", getSingleUser); 
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);;
router.get('/friends/:userId',getFriends)
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);


export default router;
