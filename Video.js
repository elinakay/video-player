// Import necessary React module
import React from 'react';

// Video component to display and control videos
function Video(props) {
  return (
    <div>
      {/* Video element with controls, autoplay, mute, and dynamic source */}
      <video controls autoPlay muted src={props.src} />
    </div>
  );
}

// Export the Video component
export default Video;

