import "./post.css";
import {MoreVert} from '@mui/icons-material';

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpeg" alt="profile pic" />
                    <span className="postUsername">Aswin s</span>
                    <span className="postDate">5 minut ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its my first post</span>
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="like" />
                    <img className="likeIcon" src="/assets/heart.png" alt="heart" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postButtomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Post;
