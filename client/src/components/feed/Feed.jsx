import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [Posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("/api/post/profile/" + username)
        : await axios.get("/api/post/timeline/" + user._id);
      // console.log(res.data);
      setPosts(res.data.sort((p1,p2)=> {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    };
    fetchPost();
  }, [username,user._id]);
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share /> }
        
        {Posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
