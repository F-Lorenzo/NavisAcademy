import React from 'react'
import YouTube from 'react-youtube'

const VideoNavis = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
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

export default VideoNavis
