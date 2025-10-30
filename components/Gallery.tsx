'use client';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    { id: 1, src: '/images/gallery/campus1.jpg', alt: 'SoIT campus main building', size: 'large' },
    { id: 2, src: '/images/gallery/lab1.jpg', alt: 'Computer lab with students', size: 'small' },
    { id: 3, src: '/images/gallery/event1.jpg', alt: 'Annual tech fest', size: 'small' },
    { id: 4, src: '/images/gallery/campus2.jpg', alt: 'Campus garden area', size: 'small' },
    { id: 5, src: '/images/gallery/lab2.jpg', alt: 'Research laboratory', size: 'large' },
    { id: 6, src: '/images/gallery/event2.jpg', alt: 'Graduation ceremony', size: 'small' },
    { id: 7, src: '/images/gallery/campus3.jpg', alt: 'Library building', size: 'small' },
    { id: 8, src: '/images/gallery/students.jpg', alt: 'Students in classroom', size: 'large' }
  ];

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getNextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const getPrevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore life at SoIT through our collection of campus images
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity ${
                image.size === 'large' ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(image.id)}
            >
              {/* Replace with actual images */}
              <div 
                className={`bg-gray-300 w-full ${image.size === 'large' ? 'h-80' : 'h-40'} flex items-center justify-center text-gray-500`}
                style={{transitionDelay: `${0.05 * image.id}s`}}
              >
                <span>Gallery Image {image.id}</span>
                {/* <img src={image.src} alt={image.alt} className="w-full h-full object-cover" /> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={getPrevImage}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              {/* Replace with actual image */}
              <div className="bg-gray-800 w-full h-[60vh] flex items-center justify-center text-white">
                <span>Gallery Image {selectedImage} (Lightbox View)</span>
                {/* <img 
                  src={galleryImages.find(img => img.id === selectedImage)?.src} 
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt} 
                  className="max-w-full max-h-[80vh] object-contain"
                /> */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p>{galleryImages.find(img => img.id === selectedImage)?.alt}</p>
              </div>
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={getNextImage}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}