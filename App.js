// Import necessary React modules and components
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Video from './Video';
import Menu from './Menu';

// Define video sources
const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

// Main App component
function App() {
  // State to manage the dynamic video source
  const [src, setSrc] = useState(VIDEOS.fast);

  // Function to handle video selection
  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };

  // Render the main structure of the App
  return (
    <div>
      <h1>Video Player</h1>
      {/* Pass onSelectVideoHandler as a prop to Menu */}
      <Menu onSelectVideo={onSelectVideoHandler} />
      {/* Pass the dynamic source to the Video component */}
      <Video src={src} />
    </div>
  );
}

// Initialize the app and render it to the specified container
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

