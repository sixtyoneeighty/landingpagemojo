import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1037139673?h=3e1c7857a2&autoplay=1&loop=1&background=1&app_id=58479"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Dr. Mojo Background"
          loading="eager"
        />
        <script src="https://player.vimeo.com/api/player.js" async />
      </div>
    </>
  );
};

export default VideoBackground;