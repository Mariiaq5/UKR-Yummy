import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NameHeader from './components/nameHeader/nameHeader';
import PicInfo from './components/picInfo/picInfo';
import MenuComponents from './components/menuComponents/menuComponents';
import CartPic from './components/cartPic/cartPic';
import SloganWord from './components/sloganWord/sloganWord';
import AdminMenuContainer from './components/adminMenu/adminMenu';
import { MenuContainer } from './views/MenuContainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminMenuContainer />
    <MenuContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();