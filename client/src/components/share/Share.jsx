import { useContext, useRef, useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async(e) =>{
    e.preventDefault();
    const newPost = {
        userId:user._id,
        desc:desc.current.value
    }
    if(file){
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name",fileName);
        data.append("file",file);
        newPost.img = fileName;
        try {
            await axios.post('/api/upload',data);
        } catch (error) {
            console.log(error);
        }
    }
    try {
        await axios.post('/api/post',newPost);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg" 
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noavatar.png"
            }
            alt="profile"
          />
          <input
            className="shareInput"
            type="text"
            placeholder={"what's in your mind "+user.username+" ?"}
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={()=>setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input style={{display:'none'}} type="file" id="file" accept=".png,.jpeg,jpg" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button type="submit" className="shareButton">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Share;
