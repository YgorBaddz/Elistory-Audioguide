import React from 'react';
import './AudioguideObj.css';
import someAudio from '/Users/User/Desktop/elistory/audioguide/src/assets//audio/Jensation - Delicious [NCS Release].mp3'
import someImg from '/Users/User/Desktop/elistory/audioguide/src/assets/imgs/alley.jpg';
import someImg1 from '/Users/User/Desktop/elistory/audioguide/src/assets/imgs/hiker.jpg';
import someImg2 from '/Users/User/Desktop/elistory/audioguide/src/assets/imgs/Dodge and Burn.jpg';
import someImg3 from '/Users/User/Desktop/elistory/audioguide/src/assets/imgs/mounts.jpg';
import {BiArrowBack, BiCalendarCheck} from 'react-icons/bi';
import {FiHeadphones} from 'react-icons/fi';
import {CiForkAndKnife} from 'react-icons/ci';
import {SlHome} from 'react-icons/sl';
import {BsGeoAlt} from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';

const AudioguideObj = () => {
  const nav = useNavigate();
    // let counter = 1;
    // setInterval(() => {
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;

    //     if(counter > 4) {
    //         counter = 1;
    //     }

    // }, 5000)
  return (
    <div className="container">
    <BiArrowBack id='backButton' onClick={() => nav(-1)}/>
    <div className="imgs-section">
        <div className="slider">
            <div className="slide">
             <input type="radio" name='radio-btn' id='radio1'/>
             <input type="radio" name='radio-btn' id='radio2'/>
             <input type="radio" name='radio-btn' id='radio3'/>
             <input type="radio" name='radio-btn' id='radio4'/>

             <div className="imgs first">
                 <img src={someImg} alt="" />
             </div>
             <div className="imgs">
                 <img src={someImg1} alt="" />
             </div>
             <div className="imgs">
                 <img src={someImg2} alt="" />
             </div>
             <div className="imgs">
                 <img src={someImg3} alt="" />
             </div>

             <div className="nav-auto">
                 <div className="elem1"></div>
                 <div className="elem2"></div>
                 <div className="elem3"></div>
                 <div className="elem4"></div>
             </div>
           </div>

         <div className="nav-labels">
             <label htmlFor='radio1' className='lbl-btn'></label>
             <label htmlFor='radio2' className='lbl-btn'></label>
             <label htmlFor='radio3' className='lbl-btn'></label>
             <label htmlFor='radio4' className='lbl-btn'></label>
         </div>
       </div>
    </div>  

    <div className="info-section">
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde?</h4>
        <a href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</a>
        <audio controls src={someAudio}></audio>
    </div>

    <div className="menu">
        <div className="options">
          <Link to='/homepage'><SlHome className='icon'/></Link>
          <Link to='/'><FiHeadphones className='icon'/></Link>
          <Link to='/calendar'><BiCalendarCheck className='icon'/></Link>
          <Link to='/restaurant'><CiForkAndKnife className='icon'/></Link>
        </div>
      </div>
    </div>
  )
}

export default AudioguideObj