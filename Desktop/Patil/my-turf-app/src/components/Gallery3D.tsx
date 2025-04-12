import React, { useState } from 'react';

interface GalleryItem {
    type: 'image' | 'video';
    url: string;
    title: string;
}

interface GalleryProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    galleryItems: readonly GalleryItem[];
}

const Gallery3D: React.FC<GalleryProps> = ({ activeIndex, setActiveIndex, galleryItems }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
            setIsDragging(false);
        }
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-2xl">
            {/* Gallery Container */}
            <div 
                className="relative w-full h-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setIsDragging(false)}
            >
                {/* Gallery Items */}
                <div className="absolute w-full h-full flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {galleryItems.map((item, index) => (
                        <div 
                            key={index}
                            className="min-w-full h-full flex items-center justify-center p-4"
                            style={{
                                transform: `perspective(1000px) rotateY(${(index - activeIndex) * 45}deg)`,
                                transition: 'transform 0.5s ease-out',
                                zIndex: index === activeIndex ? 10 : 0,
                                opacity: Math.abs(index - activeIndex) <= 1 ? 1 : 0
                            }}
                        >
                            {item.type === 'video' ? (
                                <div className="w-full h-full max-w-3xl rounded-xl overflow-hidden shadow-2xl">
                                    <iframe
                                        src={item.url}
                                        title={item.title}
                                        className="w-full h-full object-cover"
                                        allowFullScreen
                                        frameBorder="0"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full max-w-3xl object-cover rounded-xl shadow-2xl"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    onClick={handlePrev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    onClick={handleNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {galleryItems.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === activeIndex ? 'w-6 bg-black' : 'bg-gray-300'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center bg-white/90 px-6 py-2 rounded-full">
                    <h3 className="text-lg font-medium">
                        {galleryItems[activeIndex].title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Gallery3D; 