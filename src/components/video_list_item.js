//initial default components
import React from 'react';

//our components
const VideoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imgUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title} </div>
            </div>
        </div>
        </li>
    );
};

//exporting components
export default VideoListItem;