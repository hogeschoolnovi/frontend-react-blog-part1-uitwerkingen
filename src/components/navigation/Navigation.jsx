import './Navigation.css';
import Button from '../button/Button.jsx';
import logoMedium from '../../assets/logo-medium.png';
import {NavLink, useNavigate} from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <Button type="button" variant="invisible" onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="Logo that links to home page"/>
                    </Button>
                    <ul className="main-navigation-links">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/posts">Alle posts</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/new">Nieuwe post maken</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;