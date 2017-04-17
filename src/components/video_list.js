//initial default components
import React from 'react';
import VideoListItem from './video_list_item';

//our components
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

      return (
          <ul className="col-md-4 list-group">
              { videoItems}
          </ul>
  );
};


//exporting components
export default VideoList;