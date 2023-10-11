import ChatIcon from "../svg/ChatIcon"
import GalleryIcon from "../svg/GalleryIcon"
import HouseIcon from "../svg/HouseIcon"
import ListIcon from "../svg/ListIcon"
import MemberCardIcon from "../svg/MemberCardIcon"
import MoneyBagIcon from "../svg/MoneyBagIcon"
import PostListIcon from "../svg/PostListIcon"
import SettingIcon from "../svg/SettingIcon"
import { NavLink } from 'react-router-dom';
import DonationNavIcon from "../svg/DonationNavIcon"


const SideBar = () => {
  return (
    <div className="sideBar">
    
        <div className='sideBarNav'>
            <HouseIcon />
            <NavLink>Home</NavLink>
        </div>
        <div className='sideBarNav'>  
            <ListIcon  />
            <NavLink>View Page</NavLink>
        </div>
        <div className='sideBarNav'>
            <MemberCardIcon />
            <NavLink to='/membership'>Membership</NavLink>
        </div>
        <div className='sideBarNav'>
            <DonationNavIcon  />
            <NavLink to='/donation'>Donation</NavLink>
        </div>
        <div className='sideBarNav'>
            <PostListIcon  />
            <NavLink>Post</NavLink>
        </div>
        <div className='sideBarNav'>
            <GalleryIcon  />
            <NavLink to='/gallery'>Gallery</NavLink>
        </div>
        <div className='sideBarNav'>
            <ChatIcon  />
            <NavLink to='/message'>Messages</NavLink>
        </div>
        <div className='sideBarNav'>
            <MoneyBagIcon  />
            <NavLink to='/payment'>Payout</NavLink>
        </div>
        <div className='sideBarNav'>
            <SettingIcon  />
            <NavLink to='/settings'>Settings</NavLink>
        </div>

    </div>
  )
}
export default SideBar