
import './VideoItem.css';
import React from 'react';
const VideoItem = ({videoItem , onVideoSelect}) => {
    return(
        <div className="video-item item" onClick={() => onVideoSelect(videoItem)}>
            <img alt={videoItem.snippet.title}className="ui image" src={videoItem.snippet.thumbnails.medium.url}/>
            <div className="content">                
                <div className="header">
                    {videoItem.snippet.title}
                </div>
            </div>
        </div>
    )
}
export default VideoItem;