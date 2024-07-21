import express from "express";
import {
  deleteUser,
  followUser,
  getSingleUser,
  unfollowUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);


export default router;
