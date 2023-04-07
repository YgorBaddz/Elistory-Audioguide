import React from 'react';
import './Grids.css';
import App from '../../App';
import {BsGeoAlt} from 'react-icons/bs';
import someImg from '/Users/User/Desktop/elistory/audioguide/src/assets/imgs/alley.jpg';
import {BiArrowBack, BiCalendarCheck} from 'react-icons/bi';
import {FiHeadphones} from 'react-icons/fi';
import {CiForkAndKnife} from 'react-icons/ci';
import {SlHome} from 'react-icons/sl';
import { useNavigate, Link } from 'react-router-dom';

const TouristObject = () => {
  const nav = useNavigate();
  return (
    <div className="container">
        <BiArrowBack id='backButton' onClick={() => nav(-1)}/>
        <h1>Популярные туристические объекты</h1>
        
        <div className="gridObjects">
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
            <Link to='/audioguide' className='grid'>
                <img src={someImg}/>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p href='https://www.google.com/maps/@46.3036899,44.292004,13z'><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
            </Link>
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

export default TouristObject