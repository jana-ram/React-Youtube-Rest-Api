import React from 'react';

const VideoDetail = ({videoSelect}) => {
    if(videoSelect) {        
        const videoSrc = `https://www.youtube.com/embed/${videoSelect.id.videoId}`;
        return (
            <div>                
                <div className="ui embed">
                    <iframe title="video player" src ={videoSrc}/>
                </div>
                <div className="ui segment">                
                    <h4 className="ui header">{videoSelect.snippet.title}</h4>
                    <p>{videoSelect.snippet.description}</p>
                </div>
            </div>
        );
    }
    return <div>Loading...!</div>
};
export default VideoDetail;