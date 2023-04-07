import React from 'react';
import './ChooseLocation.css';
import {Link, Route, Switch} from 'react-router-dom';

const ChooseLocation = () => {
  return (
    <div className="locationContainer">
        <h1>Выберите локацию</h1>
        
        <div className="locationBtns">
          <Link to='/touristObject' className='btnsLink'>
            <button>Туристические объекты Республики</button>
          </Link>
          
          <Link to='/cityAttractions' className='btnsLink'>
            <button>Достопримечательности Элисты</button>
          </Link>
        </div>

        <p>
          В 1997—1998 годах в Элисте проходили четыре международных конкурса-бьеннале под названиями «Великий шёлковый путь», «Человек и природа глазами Востока», «Мир Давида Кугультинова» и «Планета Каисса». Во время этих симпозиумов скульпторы из различных стран мира в рамках конкурса установили свои скульптуры на улицах города. Некоторые скульптуры были созданы вне рамок международных конкурсов по инициативе калмыцких скульпторов.
        </p>
    </div>
  )
}

export default ChooseLocation