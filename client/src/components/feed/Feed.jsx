import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = ({ username }) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get(`/api/post/profile/${username}`)
        : await axios.get("/api/post/timeline/669cc6ac7e5de359a6145935");
      // console.log(res.data);
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
