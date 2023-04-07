import React from 'react'
import {BiArrowBack, BiCalendarCheck} from 'react-icons/bi';
import {FiHeadphones} from 'react-icons/fi';
import {CiForkAndKnife} from 'react-icons/ci';
import {SlHome} from 'react-icons/sl';
import { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
  const nav = useNavigate();
  return (
    <div className="container">
        <BiArrowBack id='backButton' onClick={() => nav(-1)}/>

        <div>you're at homepage page</div>
        
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

export default Homepage