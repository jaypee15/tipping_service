import React from 'react'
import "./MyAccount.css"
import Post from "../svg/Post";
import MembershipIcon from '../svg/MembershipIcon';
import CommissionIcon from '../svg/CommissionIcon';
import BulbIcon from '../svg/BulbIcon';
import ArrowDownIcon from '../svg/ArrowDownIcon';
import Rectangle from '../svg/Rectangle';
import ProfilePic from '../components/ProfilePic';
import UpLoadIcon from '../svg/UpLoadIcon';
import SideBar from '../components/SideBar';
import MyPageHeader from '../components/MyPageHeader';

const MyAccount = () => {
  return (
    <div>
        <MyPageHeader />
        <div style={{display: 'flex'}}>
            <SideBar />
            <div style={{width: '100%'}}>
                <div className='earning-top'>
                    <div className='earning-profile'>
                        <div className='earning-user'>
                            <ProfilePic />
                            <div className='earning-user-item'>
                                <p>Hi, Lilian</p>
                                <p>kudiTip.com/Lilian</p>
                            </div>
                        </div>
                        <div className='earning-btn'>
                            <UpLoadIcon fill='#1BAEDF'/>
                            <a href=''>Share page</a>
                        </div>
                    </div>

                    <hr />

                    <div className='earning'>
                        <h2>Earnings</h2>
                        <div className='earning1'>
                            <p>Last 30 days</p>
                            <ArrowDownIcon />
                        </div>
                    </div>
                    <div className='earning-item'>
                        <div className='earning-item1'>
                            <Rectangle />
                            <p>0#Earning</p>
                        </div>
                        <div className='earning-item1'>
                            <Rectangle />
                            <p>0#Commission</p>
                        </div>
                        <div className='earning-item1'>
                            <Rectangle />
                            <p>0#Membership</p>
                        </div>

                    </div>
                </div>

                <div className='share'>
                    <div className='share-item'>
                        <div className='share-item1'>
                            <p>You don’t have any followers yet</p>
                            <p>Share your page with your audience to get started</p>
                        </div>
                        <div className='earning-btn1'>
                            <UpLoadIcon fill='1BAEDF'/>
                            <p>Share page</p>
                        </div>
                    </div>
                </div>

                <div className='earn-text'>   
                    <BulbIcon />
                    <h3>More ways to earn</h3>
                </div>
                <div className='earning-last-item'>
                    <div className='earning-last-item2'>
                        <CommissionIcon />
                        <p>Commission</p>
                    </div>
                    <div className='earning-last-item2'>
                        <Post />
                        <p>Post</p>
                    </div>
                    <div className='earning-last-item2'>
                        <MembershipIcon />
                        <p>Membership</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount
