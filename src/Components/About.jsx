import React from 'react';
import "./css/About.css";
import Navbar from './Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <h1 className='heading-about'>About Us</h1>

            <div className='about'><p>Welcome to <span>StreamVault</span>, your ultimate destination for seamless video sharing and discovery. At StreamVault, we empower creators to share their stories, knowledge, and creativity with the world. Whether you're an aspiring filmmaker, educator, or someone with a unique perspective to share, StreamVault provides you with the platform to upload, manage, and showcase your videos effortlessly.<br /><br />

                Features:<br />

                <strong>Upload & Share:</strong> Easily upload your videos and choose between public and private settings to control who can view your content.<br /><br />
                <strong>Discover New Content</strong>: Explore a diverse range of videos uploaded by creators from around the globe. From tutorials to entertainment, there's something for everyone.<br /><br />
                <strong>Connect with Creators:</strong> Engage with fellow creators through comments and likes, fostering a community around shared interests.<br/><br/>
                <strong>Customization</strong>: Personalize your profile and channel to reflect your unique style and brand.
                Secure & Reliable: Rest assured knowing that your videos are stored securely and accessible anytime, anywhere.
                Join StreamVault today and embark on a journey of creativity, inspiration, and community. Start sharing your stories and exploring new perspectives with StreamVault.</p></div>
        </>
    )
}

export default About