import React, { useState } from 'react';
import './Switcher.scss';

const Switcher = ({title, opt01, opt02, onToggle}) => {

    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        isOn ? onToggle(opt01) : onToggle(opt02);
    };

    return (
        <div className='switcher-container'>
            <span className='title'>{title}</span>
            <span className='options'>{opt01}</span>
            <div className='switcher'>
                <label className="switch">
                    <input type="checkbox" checked={isOn} onChange={handleClick}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <span className='options'>{opt02}</span>
        </div>
    )

}

export default Switcher
