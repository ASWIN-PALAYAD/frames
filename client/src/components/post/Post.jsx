import "./post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post?.likes.length);
  const [isLiked, setIsLiked] = useState(false); 
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
   setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id,post.likes])
  

  const likeHandler = async() => {
    try {
      await axios.put('/api/post/'+post._id+'/like',{userId:currentUser._id});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
                <img
                  className="postProfileImg"
                  src={user.profilePicture ? PF+user.profilePicture : PF + "person/noAvatar.png"}
                  alt="profile pic"
                />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postButtomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
