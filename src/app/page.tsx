'use client';

import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  Star,
  PartyPopper,
  Music,
  Coffee,
} from 'lucide-react';

export default function BirthdayCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Your Birthday Wrapped',
      subtitle: 'A special celebration just for you ✨',
      background: 'bg-gradient-to-br from-violet-600 to-pink-500',
      icon: PartyPopper,
    },
    {
      title: 'You Light Up Every Room',
      content:
        'Your smile has brightened:\n- Countless mornings\n- Every coffee chat\n- All our shared moments\n- So many lives around you',
      background: 'bg-gradient-to-br from-pink-500 to-rose-400',
      icon: Sparkles,
    },
    {
      title: 'What Makes You Special',
      content:
        'Things I admire about you:\n• Your infectious laughter\n• The way you care for others\n• Your passionate spirit\n• How you make everything better',
      background: 'bg-gradient-to-br from-rose-400 to-orange-400',
      icon: Star,
    },
    {
      title: 'Our Favorite Moments',
      content:
        "Remember when:\n1. We had that amazing conversation about life\n2. You shared your dreams with me\n3. Your enthusiasm for the little things\n4. How time flies when we're together",
      background: 'bg-gradient-to-br from-orange-400 to-amber-500',
      icon: Coffee,
    },
    {
      title: 'A Birthday Wish',
      content:
        'May your day be as beautiful as your heart,\nas bright as your smile,\nand as special as you are to me.\n\nHappy Birthday! 🎂',
      background: 'bg-gradient-to-br from-amber-500 to-violet-600',
      icon: Heart,
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((curr) => curr + 1);
    }
  };

  const restartShow = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
      <div
        className={`w-full max-w-md h-[600px] rounded-lg p-8 transition-all duration-700 transform cursor-pointer
          ${slides[currentSlide].background} hover:scale-[1.02]`}
        onClick={currentSlide < slides.length - 1 ? nextSlide : undefined}
      >
        <div className="h-full flex flex-col items-center justify-center text-white text-center space-y-8">
          {React.createElement(slides[currentSlide].icon, {
            className: 'w-16 h-16 animate-bounce',
          })}

          <h1 className="text-4xl font-bold tracking-tight">
            {slides[currentSlide].title}
          </h1>

          <div className="text-xl leading-relaxed whitespace-pre-line">
            {slides[currentSlide].subtitle || slides[currentSlide].content}
          </div>

          <div className="flex space-x-2 mt-auto">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {currentSlide < slides.length - 1 ? (
            <p className="text-sm mt-4 animate-pulse">Tap to continue</p>
          ) : (
            <button
              onClick={restartShow}
              className="mt-4 px-6 py-2 rounded-full border-2 border-white hover:bg-white/20 transition-colors duration-300"
            >
              Start Over ✨
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
