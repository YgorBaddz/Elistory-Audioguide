import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TouristObject from './pages/touristObject/TouristObject';
import CityAttractions from './pages/cityAttractions/CityAttractions';
import AudioguideObj from './pages/audioguideObj/AudioguideObj';
import Homepage from './pages/Homepage';
import Calendar from './pages/Calendar';
import Restaurant from './pages/Restaurant';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/touristObject',
    element: <TouristObject/>
  },
  {
    path: '/cityAttractions',
    element: <CityAttractions/>
  },
  {
    path: '/audioguide',
    element: <AudioguideObj/>,
  },
  {
    path: '/homepage',
    element: <Homepage/>,
  },
  {
    path: '/calendar',
    element: <Calendar/>,
  },
  {
    path: '/restaurant',
    element: <Restaurant/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider>
  //   <App />
  // </RouterProvider>
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
