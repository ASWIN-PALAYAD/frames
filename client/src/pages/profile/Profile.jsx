import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => { 

  const PF = import.meta.env.VITE_PUBLIC_FOLDER
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${params.username}`);
      // console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);


  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PF+"person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username= {params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
