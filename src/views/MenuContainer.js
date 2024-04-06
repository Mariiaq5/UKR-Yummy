import { useState } from 'react';
import NameHeader from '../components/nameHeader/nameHeader';
import PicInfo from '../components/picInfo/picInfo';
import { MenuComponents } from '../components/menuComponents/menuComponents';
//import CartPic from '../components/cartPic/cartPic';
import SloganWord from '../components/sloganWord/sloganWord';
import AdminMenuContainer from '../components/adminMenu/adminMenu';
import Infoabout from '../components/sloganWord/Infoabout';


export const MenuContainer=() => {
const [refresh, setRefresh] = useState(0)
const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

const authenticateAdmin = () => {
    const password = prompt("Please enter the admin password:");
    const correctPassword = "24081991"; //password access to admin menu

    if (password === correctPassword) {
        setIsAdminAuthenticated(true);
    } else {
        alert("Incorrect Password");
    }
};

    const hideAdminMenu = () => setIsAdminAuthenticated(false);
    const reloadPage = () => window.location.reload()

    return (<>
            {isAdminAuthenticated ? ( <>
                <AdminMenuContainer/>
                <button style={{ backgroundColor: 'grey', color: 'orange'}} onClick={reloadPage}>Hide and save changes</button> 
                </>
            ) : (
                <button style={{ backgroundColor: 'grey', color: 'orange' }} onClick={authenticateAdmin}>Admin Menu</button>
            )}
            <div className='components'>
                <NameHeader/>
                <PicInfo/>
                <MenuComponents refresh={refresh} setRefresh={setRefresh}/>
                {/* <CartPic refresh={refresh}/> */}
                <SloganWord/>
                <Infoabout/>
            </div>
        </>
    )
}