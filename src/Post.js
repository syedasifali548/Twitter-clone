import React,{forwardRef} from 'react'
import './Post.css';
// import Lion from './Images/lion.gif'
import FaceIcon from '@material-ui/icons/Face';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


const Post=forwardRef(({
    displayName, username, verified, text, image, avatar },ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <FaceIcon src={avatar}/>
            </div>
            
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h4>{displayName}{" "} <span className="post_headerSpecial">
                           {verified && <VerifiedUserIcon className="post_badge" />}{username}
                        </span>
                        </h4>
                    </div>
                    <div className="post_headerDescription" >
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} width="350px"/>

                <div className="post_footor">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
});

export default Post
