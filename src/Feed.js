import React ,{useEffect, useState} from 'react'; 
import Tweetbox from './Tweetbox';
import Post from './Post';
import './Feed.css';
import db from './firebase';
import FlipMove from 'react-flip-move'

function Feed() {
    const[posts , setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapShot=>(
            setPosts(snapShot.docs.map(doc=>doc.data()))
        ))

    },[]);
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">

                <h2>Home</h2>
            </div>
            {/* Tweet box */}
            <Tweetbox/>
           <FlipMove>
            {posts.map((post)=>(  
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
            ))}
            </FlipMove>
       

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        

           
        </div>
    )
}

export default Feed;
