import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'
import './Sidebar.css'




function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon  className="Sidebar_twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon}  text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon}  text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon}  text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon}  text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon}  text="List" />
            <SidebarOption Icon={PermIdentityIcon}  text="Profile" />
            <SidebarOption Icon={MoreHorizIcon}  text="More" />
            {/* Tweet Button */}
            <button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</button>
        </div>
    )
}

export default Sidebar
