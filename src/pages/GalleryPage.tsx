import React, { useState } from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: '/whyida.jpg', alt: 'Why IDA - 1' },
  { src: '/whyida1.jpg', alt: 'Why IDA - 2' },
  { src: '/whyida2.jpg', alt: 'Why IDA - 3' },
  { src: '/whyida3.jpg', alt: 'Why IDA - 4' },
  { src: '/whyida4.jpg', alt: 'Why IDA - 5' },
  { src: '/whyida5.jpg', alt: 'Why IDA - 6' },
  { src: '/whyida6.jpg', alt: 'Why IDA - 7' },
  { src: '/workshop.jpg', alt: 'Workshop - 1' },
  { src: '/workshop1.jpg', alt: 'Workshop - 2' },
    { src: '/training-intern.jpg', alt: 'Workshop - 2' },
      { src: '/team.jpg', alt: 'Workshop - 2' },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const openImage = (image: ImageItem) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      <div className="text-center mb-8">
    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
      India Drone Academy Gallery
    </h1>
    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
      Explore memorable moments from our drone training sessions, workshops, and campus activities. Each image reflects our commitment to hands-on learning and excellence in UAV education.
    </p>
  </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-80 transition"
              onClick={() => openImage(img)}
            />
            {/* Removed the alt text below the image */}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={closeImage}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg border-4 border-white shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
