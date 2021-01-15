import React ,{useState} from 'react'
import './Tweetbox.css'
import FaceIcon from '@material-ui/icons/Face';
import {Button} from '@material-ui/core'
import db from './firebase'

function Tweetbox() {
    const[tweetMessage,setTweetMessage]= useState('')
    const[tweetImage,setTweetImage]= useState('')
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Syed Asif Ali",
            username:"@syedasifali548",
            verified: true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Gif-Wallpapers-HD.gif"
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <FaceIcon/>   
                <br></br>  
                 <input
                 onChange={(e)=>setTweetMessage(e.target.value)}
                  placeholder="What's happening?" type="text" value={tweetMessage} />
                </div>
                <input 
                 onChange={(e)=>setTweetImage(e.target.value)}
                className="tweetBox_Imageinput" placeholder="Optional:Enter image URL" type="text" value={tweetImage} />

                <Button className="tweetBox_tweetButton" onClick={sendTweet}>Tweet</Button>                    
            </form>

        </div>
    )
}

export default Tweetbox;
