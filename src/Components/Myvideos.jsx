import React,{useState,useEffect} from 'react';
import "./css/Myvideos.css";
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Myvideos = () => {
    const {ownerId} = useParams();
    const [myVideos,setmyVideos] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/home/myvideos/${ownerId}`)
            .then(res=>{
                setmyVideos(res.data);
            }).catch(err=>{
                console.log(err);
            })
    },[ownerId]);
  return (
    <>  
        <Navbar />
        <div className='video-grid'>
            {myVideos.map(video =>(
                <div key={video.id} className='video-card'>
                    <video width='320' height='240' controls>
                    <source src={`http://localhost:3000/${video.url}`} type='video/mp4' />
                    </video>
                    <h3>{video.title}</h3>
                    <p>Author: {video.Author}</p>
                    <p>Privacy: {video.privacy}</p>
                    <p>Uploaded on: {new Date(video.createdAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Myvideos