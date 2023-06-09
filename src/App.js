import './App.css';

import ChooseLocation from './pages/chooseLocation/ChooseLocation';
import TouristObject from './pages/touristObject/TouristObject';
import CityAttractions from './pages/cityAttractions/CityAttractions';
import AudioguideObj from './pages/audioguideObj/AudioguideObj';

import {BiArrowBack, BiCalendarCheck} from 'react-icons/bi';
import {FiHeadphones} from 'react-icons/fi';
import {CiForkAndKnife} from 'react-icons/ci';
import {SlHome} from 'react-icons/sl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BiArrowBack id='backButton'/>
      <ChooseLocation/>

      <div className="menu">
        <div className="options">
          <Link to='/homepage'><SlHome className='icon'/></Link>
          <Link to='/'><FiHeadphones className='icon'/></Link>
          <Link to='/calendar'><BiCalendarCheck className='icon'/></Link>
          <Link to='/restaurant'><CiForkAndKnife className='icon'/></Link>
        </div>
      </div>
    </div>
  );
}

export default App;
