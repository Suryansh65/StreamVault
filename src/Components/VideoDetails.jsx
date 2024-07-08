import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import "./css/VideoDetail.css";

const VideoDetails = () => {
    const { _id } = useParams();

    const [videodetail, setVideodetail] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/home/videos/${_id}`)
            .then((res) => {
                setVideodetail(res.data);
                console.log(res.data);
            }).catch((err) => console.error(err));
    }, [_id]);
    return (
        <>
            <Navbar />
            <h1 className='videodetail-heading'>Video detail</h1>
            <div className='video-detail-container'>

                <video width='70%' height='20%' controls src={`http://localhost:3000/${videodetail.url}`} className='video-player' />
                <h2>{videodetail.title}</h2>
                {/* <p>Uploaded by: {videodetail.owner.username}</p> */}
                <p>Views: {videodetail.views}</p>
                <p>Upload Date: {videodetail.createdAt}</p>
            </div>

        </>
    )
}

export default VideoDetails