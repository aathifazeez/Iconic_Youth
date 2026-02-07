'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/hero/banner-1.png',
            title: 'Building Our Future Together',
            subtitle: 'Empowering youth to create positive impact in their communities',
            isUpcoming: false
        },
        {
            image: '/hero/banner-2.png',
            title: 'Growing a Greener Tomorrow',
            subtitle: 'Join us in environmental conservation and sustainability initiatives',
            isUpcoming: false
        },
        {
            image: '/hero/banner-3.png',
            title: 'Learn. Lead. Succeed.',
            subtitle: 'Educational mentorship programs that transform lives',
            isUpcoming: false
        },
        {
            image: '/hero/banner-upcoming.png',
            title: 'Youth Leadership Conference',
            subtitle: 'Join our upcoming event and ignite your leadership potential',
            isUpcoming: true
        }
    ];

    // Auto-rotate slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center px-4 max-w-4xl mx-auto">
                            {slide.isUpcoming && (
                                <div className="mb-6 animate-pulse">
                                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
                                        ✨ Latest Upcoming Event
                                    </span>
                                </div>
                            )}

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                                {slide.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-white mb-8 opacity-90 animate-fade-in">
                                {slide.subtitle}
                            </p>

                            {slide.isUpcoming ? (
                                <Link href="/projects">
                                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-2xl">
                                        View Project Details
                                    </button>
                                </Link>
                            ) : (
                                <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                                    Get Started Today
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all rounded-full ${index === currentSlide
                                ? 'bg-white w-12 h-3'
                                : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <ChevronRight className="text-white rotate-90" size={32} />
            </div>
        </section>
    );
};

export default HeroSlider;
