import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({user}) => {

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="birthday" />
          <span className="birthdayText">
              <b>kiran</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
            {Users.map(user=>(
              <Online key={user.id} user={user}/>
            ))}
          
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">{Users.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : " "}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src='/assets/person/1.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
          <div className="rightbarFollowing">
            <img src='/assets/person/2.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
          <div className="rightbarFollowing">
            <img src='/assets/person/3.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
          <div className="rightbarFollowing">
            <img src='/assets/person/4.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
          <div className="rightbarFollowing">
            <img src='/assets/person/5.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
          <div className="rightbarFollowing">
            <img src='/assets/person/6.jpeg' alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arun</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper"> 
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div> 
  )
} 

export default Rightbar