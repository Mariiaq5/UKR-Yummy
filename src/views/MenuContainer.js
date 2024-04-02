import { useState } from 'react';
import NameHeader from '../components/nameHeader/nameHeader';
import PicInfo from '../components/picInfo/picInfo';
import { MenuComponents } from '../components/menuComponents/menuComponents';
//import CartPic from '../components/cartPic/cartPic';
import SloganWord from '../components/sloganWord/sloganWord';
import AdminMenuContainer from '../components/adminMenu/adminMenu';


export const MenuContainer=() => {
const [refresh, setRefresh] = useState(0)
const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

const authenticateAdmin = () => {
    const password = prompt("Please enter the admin password:"); // Simple prompt for password input
    const correctPassword = "24081991"; // This should be more securely handled in a real application

    if (password === correctPassword) {
        setIsAdminAuthenticated(true);
    } else {
        alert("Incorrect Password");
    }
};

    const hideAdminMenu = () => setIsAdminAuthenticated(false);

    return (<>
            {isAdminAuthenticated ? ( <>
                <AdminMenuContainer/>
                <button onClick={hideAdminMenu}>Hide it</button> 
                </>
            ) : (
                <button onClick={authenticateAdmin}>Admin Menu</button>
            )}
            <div className='components'>
                <NameHeader/>
                <PicInfo/>
                <MenuComponents refresh={refresh} setRefresh={setRefresh}/>
                {/* <CartPic refresh={refresh}/> */}
                <SloganWord/>
            </div>
        </>
    )
}