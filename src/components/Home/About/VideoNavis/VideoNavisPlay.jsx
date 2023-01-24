import React from 'react';
import YouTube from 'react-youtube';

const VideoNavisPlay = () => {

    let videoWidth = '640';
    (window.innerWidth < 600) ? videoWidth = '360' : videoWidth = '580'; 

    const opts = {
        height: '390',
        width: videoWidth,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            rel: 0,
        },
    };

    return (
        <div>
            <YouTube
                videoId="UdEuBHCquPI"
                opts={opts}
                
                onReady={() => {}}
                onPlay={() => {}}
                onPause={() => {}}
                onEnd={() => {}}
                onError={() => {}}
                onStateChange={() => {}}
            />
        </div>
    )

}

export default VideoNavisPlay
