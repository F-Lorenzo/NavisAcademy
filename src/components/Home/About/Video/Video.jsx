import { useState } from "react";
import ReactPlayer from 'react-player';

export const Video = () => {

    const [ play, setPlay ] = useState(false);

    setTimeout(() => {
        setPlay(true);
    }, 10000);

    return (
        <div className="about">
            <ReactPlayer 
                className='react-player'
                url='https://www.youtube.com/watch?v=UdEuBHCquPI'
                volume={0.1}
                playing={play}
                fallback={"se ta cargando viteh"}
            />
        </div>
    )
}

export default Video