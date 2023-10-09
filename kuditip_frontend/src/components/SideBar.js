import ChatIcon from "../svg/ChatIcon"
import GalleryIcon from "../svg/GalleryIcon"
import HouseIcon from "../svg/HouseIcon"
import ListIcon from "../svg/ListIcon"
import Love from "../svg/Love"
import MemberCardIcon from "../svg/MemberCardIcon"
import MoneyBagIcon from "../svg/MoneyBagIcon"
import PostListIcon from "../svg/PostListIcon"
import SettingIcon from "../svg/SettingIcon"
import { NavLink } from 'react-router-dom';



const SideBar = () => {
  return (
    <div class="navbar">
        <ul>
            <div className='nav'>
                <HouseIcon />
                <NavLink>Home</NavLink>
            </div>
            <div className='nav'>  
                <ListIcon  />
                <NavLink>View Page</NavLink>
            </div>
            <div className='nav'>
                <MemberCardIcon />
                <NavLink>Membership</NavLink>
            </div>
            <div className='nav'>
                <Love  />
                <NavLink>Donation</NavLink>
            </div>
            <div className='nav'>
                <PostListIcon  />
                <NavLink>Post</NavLink>
            </div>
            <div className='nav'>
                <GalleryIcon  />
                <NavLink>Gallery</NavLink>
            </div>
            <div className='nav'>
                <ChatIcon  />
                <NavLink>Messages</NavLink>
            </div>
            <div className='nav'>
                <MoneyBagIcon  />
                <NavLink>Payout</NavLink>
            </div>
            <div className='nav'>
                <SettingIcon  />
                <NavLink>Settings</NavLink>
            </div>

        </ul>
     
    </div>
  )
}
export default SideBar