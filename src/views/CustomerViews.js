import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameHeader from './components/nameHeader/nameHeader';
import PicInfo from './components/picInfo/picInfo';
import MenuComponents from './components/menuComponents/menuComponents';
import CartPic from './components/cartPic/cartPic';
import SloganWord from './components/sloganWord/sloganWord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='components'>
    <NameHeader/>
    <PicInfo/>
    <MenuComponents/>
    <CartPic/>
    <SloganWord/>
    </div>
  </React.StrictMode>
);