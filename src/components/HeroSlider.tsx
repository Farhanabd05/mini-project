"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Image } from 'react-datocms';


interface HeroSliderProps {
  slides: {
    id: string;
    title: string;
    slug: string;
    image: {
      responsiveImage: {
        src: string;
        width: number;
        alt: string;
      };
    };
  }[];
};


const HeroSlider: React.FC<HeroSliderProps> = ( { slides } ) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative border-4 border-[#120081] h-[500px] rounded-lg overflow-hidden">
      {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div>
            {// eslint-disable-next-line jsx-a11y/alt-text 
              <Image data={slide.image.responsiveImage} className="object-fill" layout='fill'/>}
            </div>
            <Link href={`/${slide.slug}`} className="absolute inset-0 z-0">
              <div className="absolute bottom-2 left-2 right-0 text-white p-4 z-30">
                <h2 className="text-2xl font-bold z-20">{slide.title}</h2>
              </div>
            </Link>
          </div>
      ))}
      <div className="absolute top-4 right-4 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-indigo-600' : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-30"
        onClick={handlePrevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-indigo-800" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-30"
        onClick={handleNextSlide}
      >
        <ChevronRight className="w-6 h-6 text-indigo-800" />
      </button>
    </div>
  );
};

export default HeroSlider;