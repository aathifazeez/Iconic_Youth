'use client';

import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = '', animation = 'fade-in' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

    return (
        <div ref={sectionRef} className={`${animationClass} ${className}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;