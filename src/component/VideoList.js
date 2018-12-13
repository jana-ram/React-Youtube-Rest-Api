import React from 'react';
import VideItem from './VideoItem';
const VideoList = ({videoList , onVideoSelect}) => {
    const renderList = videoList.map((video) =>{
        return <VideItem key={video.id.videoId} onVideoSelect={onVideoSelect} videoItem={video}/>
    });
    return <div className="ui relaxed divided list ">{renderList}</div>;
}

export default VideoList;