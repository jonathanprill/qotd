import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Squash as Hamburger } from 'hamburger-react'


export default function Navigation() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <div style={{ position: 'absolute', top: '18px', left: '10px', zIndex: '100' }}>
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
                </ul>
            </nav>
        </> 
    )
}