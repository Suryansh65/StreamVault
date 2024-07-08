import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UploadVideo from './UploadVideo';
import "./css/Home.css";

const Home = () => {
    const [videos, setVideos] = useState([]);
   
    
    useEffect(() => {
        axios.get('http://localhost:3000/home')
            .then(res => {
                setVideos(res.data);
                console.log(res.data);
            }).catch(err => { console.log("Their was an error fetching the videos!", err) });
    }, []); // only on first render

    return (
        <>
            <Navbar />
            <h1 className='home-heading'>Video's List</h1>
            {/* { user && (<Link to={`/myvideos/${user.id}`}>My Videos</Link>)} */}
            <div className='video-grid'>
                {videos.map(video => (
                    <div key={video._id} className='video-card'>
                        <video width='320' height='240' controls>
                            <source src={`http://localhost:3000/${video.url}`} type='video/mp4' />
                        </video>
                        <div className='fullscreen-container'>
                            <Link to={`/home/videos/${video._id}`} className="full-screen-link">See Video Details</Link>

                        </div>
                        <p>Views: {video.views}</p>
                        <h3>{video.title}</h3>
                        <p>Author: {video.Author}</p>
                        <p>Uploaded on: {new Date(video.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home