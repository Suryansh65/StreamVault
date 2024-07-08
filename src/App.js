import logo from './logo.svg';
import Home from './Components/Home';
import { useState } from 'react';
import Login from './Components/Login.jsx';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import UploadVideo from './Components/UploadVideo.jsx';
import Myvideos from './Components/Myvideos.jsx';
import VideoDetails from './Components/VideoDetails.jsx';
function App() {
  
  // const [isLogin, setisLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/uploads' element={<UploadVideo/>}></Route>
        <Route path='/home/myvideos/:ownerId' element={<Myvideos/>}></Route>
        <Route path='/home/videos/:_id' element={<VideoDetails />}></Route>
      </Routes>
      
    </BrowserRouter>

 
  );
}

export default App;
