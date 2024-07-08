import React, { useState } from 'react';
import "./css/UploadVideo.css";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [file, setFile] = useState(null);
    const [privacy, setPrivacy] = useState('public');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('Author', Author);
        formData.append('video', file);
        formData.append('privacy', privacy);
        try {
            axios.post('http://localhost:3000/uploads', formData)
                .then((res) => {
                    console.log("Video uploaded successfully", res.data);
                    setTitle('');
                    setFile(null);
                    setAuthor('');
                    setPrivacy('public');
                    navigate('/home');

                })
        }catch(err){
            console.log(err);
        }
        
    }
return (
    <>
        <Navbar />
        <div className='upload-main-container'>
            <h2 className='upload-heading'>Upload Video</h2>
            <form action='POST' onSubmit={handleSubmit}>
                <input type='text' placeholder='Title of Video' onChange={(e) => setTitle(e.target.value)} className='upload-input' />
                <input type='text' placeholder='Owner"s Name' onChange={(e) => setAuthor(e.target.value)} className='upload-input' />
                <select value={privacy} onChange={(e) => setPrivacy(e.target.value)} className='public-container'>
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                </select>


                <input type='file' accept='video/*' onChange={(e) => setFile(e.target.files[0])} required className='upload-input-file' />

                <button type='submit'>Upload Video</button>
            </form>

        </div>

    </>
)
}

export default UploadVideo;