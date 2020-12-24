import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';

function header() {
    return (
        <div className = "header">

            <div className = "header__left">
                <img src = "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt = ""></img>

                <div className = "header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text"></input>

                </div>
            </div>

            <div className = "header__right">
                <HeaderOption Icon = {HomeIcon} title = "Home" />
                <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network" />
                <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs" />
                <HeaderOption Icon = {ChatIcon} title = "Messaging" />
                <HeaderOption Icon = {NotificationsIcon} title = "Notifications" />
                <HeaderOption avatar = "https://lh3.googleusercontent.com/bFE5GTxftjZIlgMnxSdIsDAXgQKbc6V9aDcQT1X6NYQoHz-73ZGBA1xYRaNH9Du0QNmQhQ=s85" title = "Profile" />
            </div>

        


        </div>
    )
}

export default header

