import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="birthday" />
          <span className="birthdayText">
              <b>kiran</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="profile" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Aswin S</span>
          </li>
        </ul>
      </div>
    </div> 
  )
} 

export default Rightbar