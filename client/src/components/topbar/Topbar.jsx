import { Search, Person, Chat, Notifications } from "@mui/icons-material";

import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to={"/"}>
          <span className="logo">Frames</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search for friends,posts.."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF+user.profilePicture
                : PF+"person/noAvatar.png"
            }
            alt="img"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
