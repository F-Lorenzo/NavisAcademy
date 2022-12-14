import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { UserAuth } from "../../Context/AuthContext";
import './DropDown.css';

const DropDown = () => {

    const { logOut } = UserAuth();
    const [ click, setClick ] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);

    const handleLogout = async () => {
        setClick(false);
        try {
          await logOut();
          navigate("/logger");
          swal("BYE!", `sesion Finalizada!`, "success");
        } catch (e) {
          console.log(e.message);
        }
    };

    return (
        <div >
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <Link className='dropdown-link' to='/' onClick={handleLogout}>
                        Cerrar Sesión
                    </Link>
                </li>
            </ul>     
        </div>
    )

}

export default DropDown;
