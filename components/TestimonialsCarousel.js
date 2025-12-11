'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Estate Planning Client',
    content: 'James handled our family trust with exceptional care and attention to detail. He made complex legal concepts easy to understand and provided peace of mind during a difficult time.',
    rating: 5,
    date: 'March 2024',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The team at Mason Legal helped us navigate a complex partnership dispute. Their strategic approach saved our business and secured a favorable settlement. Professional and effective.',
    rating: 5,
    date: 'January 2024',
  },
  {
    id: 3,
    name: 'Robert Williams',
    role: 'Family Law Client',
    content: 'During my divorce proceedings, James provided not only expert legal guidance but also emotional support. His dedication to achieving the best outcome for my children was remarkable.',
    rating: 5,
    date: 'December 2023',
  },
  {
    id: 4,
    name: 'Jessica Martinez',
    role: 'Real Estate Client',
    content: 'Exceptional service in our property acquisition. The attention to detail and proactive communication ensured a smooth transaction. Highly recommended for any real estate legal needs.',
    rating: 5,
    date: 'November 2023',
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Testimonial Cards */}
      <div className="relative h-[400px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                <p className="text-2xl md:text-3xl text-neutral-dark leading-relaxed mb-8 font-serif italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-mid">{testimonial.role}</p>
                    <p className="text-sm text-gray-400 mt-1">{testimonial.date}</p>
                  </div>
                  
                  <div>
                    {renderStars(testimonial.rating)}
                    <p className="text-sm text-gray-500 mt-2 text-right">
                      Perfect Score
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center space-x-4 mt-12">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-primary" />
        </button>
        
        {/* Dots Indicator */}
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-gray-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 hover:text-primary" />
        </button>
      </div>

      {/* Auto-play Indicator */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="relative w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-1000 ease-linear"
            style={{
              width: autoplay ? '100%' : '0%',
              animation: autoplay ? 'progress 5s linear' : 'none',
            }}
          />
        </div>
        <span className="text-sm text-gray-500">
          {autoplay ? 'Auto-playing' : 'Paused'}
        </span>
      </div>
    </div>
  )
}