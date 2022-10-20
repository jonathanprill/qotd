import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Squash as Hamburger } from 'hamburger-react'
import Auth from '../utils/auth'; 


export default function Navigation() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // Logout button
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };


    return (
        <>
            <div style={{ position: 'relative', textAlign: 'left', zIndex: '100' }}>
                <button onClick={showSidebar} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', padding: '0' }}>
                    <Hamburger size={20} />
                </button>
            </div>


            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' >
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} style={{ marginTop: '20px' }}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span style={{ paddingLeft: '8px' }}>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        {Auth.loggedIn() ? (
                            <>
                                <a href="/" onClick={logout} style={{textDecoration: 'none', padding: '20px'}}>
                                    Logout
                                </a>
                            </>
                        ) : (
                            <>
                                <Link to="/login" style={{textDecoration: 'none', padding: '10px'}}>Login</Link>
                                <Link to="/signup" style={{textDecoration: 'none', padding: '10px'}}>Signup</Link>
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}