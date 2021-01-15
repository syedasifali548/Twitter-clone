import React from 'react'
import './Widget.css'
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';


function Widget() {
    return (
        <div className="widgets">
            <div className="widget_input">
                <SearchIcon className="widhet_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1042494319893131264"}/>
                <TwitterTweetEmbed tweetId={"1042494319893131264"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="Syed Asif Ali" options={{height:400}}/>
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{text:"#reactjs is awesome" , via:"cleverazi"}}/>
            </div>
            
            
            
        </div>
    )
}

export default Widget;
