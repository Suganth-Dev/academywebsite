import React, { useState } from 'react';

interface VideoItem {
  url: string;
  title: string;
}

const videos: VideoItem[] = [
  { url: 'Z5_nStuyptA', title: 'Video 1: Drone Training Overview' },
  { url: 'c-q1rJGiwXU', title: 'Video 2: UAV Technology in Action' },
  { url: 'x_-QizYDmok', title: 'Video 3: Future of Drone Services' },
  { url: 'tS-qlluXZDA', title: 'Video 4: Drone Pilots Training Session' },
  { url: '3KWWiAdeBec', title: 'Video 5: How Drones are Transforming Industries' },
  { url: 'rTvNj8a1za0', title: 'Video 6: Introduction to Drone Technology' },
  { url: '5Jm8A3aw6O4', title: 'Video 7: Drone Applications in Agriculture' },
];

const VideoPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoSelect = (url: string) => {
    setSelectedVideo(url);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">India Drone Academy - Video Gallery</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Watch informative videos on drone training, technology, and more. Stay updated with the latest in UAV education.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, idx) => (
          <div key={idx} className="relative cursor-pointer group" onClick={() => handleVideoSelect(video.url)}>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.url}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="pointer-events-none absolute bottom-2 left-2 bg-black/60 text-white font-semibold text-[10px] xs:text-xs sm:text-sm px-2 py-1 rounded">
              {video.title}
            </span>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="inline-block bg-white text-black px-3 py-1 rounded text-sm mt-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
