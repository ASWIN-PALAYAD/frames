
const CloseFriend = ({user}) => {

  const PF = import.meta.env.VITE_PUBLIC_FOLDER


  return (
    <li className="sidebarFriend">
            <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className='SidebarFriendName' >{user.username}</span>
          </li>
  )
}

export default CloseFriend