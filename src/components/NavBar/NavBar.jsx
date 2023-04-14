
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.webp";
import './NavBar.css';
const UpdatedNavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} width='160' height='43'  alt="NAVIS LOGO" />
                </Link>
            </nav>
        </div>
    )

}

export default UpdatedNavBar
