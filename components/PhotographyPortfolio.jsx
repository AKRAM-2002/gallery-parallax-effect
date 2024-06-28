'use client'
import Image from 'next/image';
import { useState } from 'react';

const portfolioData = {
  portraits: [
    { src: '/images/12.jpeg', title: 'A Cat Portrait', description: 'Portrait study' },
    { src: '/images/7.jpeg', title: 'Vibrant Youth', description: 'A kid portrait' },
    { src: '/images/3.jpeg', title: 'Elegance Illuminated', description: 'Studio portrait' },
  ],
  nature: [
    { src: '/images/14.jpeg', title: 'Branching Out', description: 'Wedding photography' },
    { src: '/images/2.jpeg', title: 'Candid Conferences', description: 'Corporate event' },
    { src: '/images/34.jpeg', title: 'Festival of Colors', description: 'Cultural event' },
  ]
};

export default function PhotographyPortfolio() {
  const [currentCategory, setCurrentCategory] = useState('portraits');

  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase">{currentCategory} Photography</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioData[currentCategory].map((item, index) => (
            <div key={index} className="relative group">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button onClick={() => setCurrentCategory('portraits')} className="text-gray-400 hover:text-white">
            &lt; Portraits
          </button>
          <button onClick={() => setCurrentCategory('nature')} className="text-gray-400 hover:text-white">
            Nature &gt;
          </button>
        </div>
      </div>
    </div>
  );
}