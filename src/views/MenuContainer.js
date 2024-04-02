
import { useState } from 'react';
import NameHeader from '../components/nameHeader/nameHeader';
import PicInfo from '../components/picInfo/picInfo';
import { MenuComponents } from '../components/menuComponents/menuComponents';
import CartPic from '../components/cartPic/cartPic';
import SloganWord from '../components/sloganWord/sloganWord';


export const MenuContainer=() => {
const [refresh, setRefresh] = useState(0)

    return (
        <div className='components'>
        <NameHeader/>
        <PicInfo/>
        <MenuComponents refresh={refresh} setRefresh={setRefresh}/>
        {/*<CartPic refresh={refresh}/>*/}
        <SloganWord/>
        </div>
    )
}