'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Users, ChevronRight, ArrowRight } from 'lucide-react';

// Reusable Components
const SectionTitle = ({ subtitle, title, description }) => (
    <div className="text-center mb-12 animate-fade-in">
        {subtitle && <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">{subtitle}</span>}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            {title}
        </h2>
        {description && <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">{description}</p>}
    </div>
);

const UpcomingProjectCard = ({ title, category, description, image, date, location, time, index }) => {
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative h-56 overflow-hidden group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        Upcoming
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Users className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                        <span>{time}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{description}</p>

                <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition-all transform hover:scale-[1.02] inline-flex items-center justify-center group">
                    View Details
                    <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

const PastProjectCard = ({ title, category, description, image, date, index }) => {
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative h-64 overflow-hidden group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {date}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white font-semibold inline-flex items-center group/btn">
                        View Project Details
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
                <button className="text-teal-500 font-medium hover:text-teal-600 inline-flex items-center group">
                    View Project Details
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default function ProjectsPage() {
    const upcomingProjects = [
        {
            title: 'Tree Plantation Drive',
            category: 'Environment',
            description: 'Join us for our first tree plantation drive where we aim to plant over 500 saplings across the city.',
            image: '',
            date: 'July 25, 2025',
            location: 'Riverside Elementary School',
            time: '9:00 AM – 2:00 PM',
        },
        {
            title: 'Community School Renovation',
            category: 'Education',
            description: 'We are renovating classrooms, playgrounds, and libraries at Riverside Elementary School to create better learning environments.',
            image: '',
            date: 'August 5, 2025',
            location: 'Riverside Elementary School',
            time: '10:00 AM – 4:00 PM',
        },
        {
            title: 'Food Drive for Homeless',
            category: 'Community',
            description: 'Our food drive aims to distribute fresh meals to homeless individuals across the city, making sure no one goes hungry.',
            image: '',
            date: 'August 15, 2025',
            location: 'Downtown Community Center',
            time: '11:00 AM – 5:00 PM',
        },
        {
            title: 'Youth Leadership Workshop',
            category: 'Education',
            description: 'A day-long workshop designed to nurture leadership skills among young individuals with interactive activities.',
            image: '',
            date: 'September 1, 2025',
            location: 'City Conference Hall',
            time: '9:00 AM – 5:00 PM',
        },
    ];

    const pastProjects = [
        {
            title: 'School Supplies Drive',
            category: 'Education',
            description: 'Distributed school supplies to over 500 underprivileged children, ensuring they have the tools they need to succeed.',
            image: '',
            date: 'March 16, 2025',
        },
        {
            title: 'Beach Cleanup Initiative',
            category: 'Environment',
            description: 'Cleaned over 5 miles of coastline, removing more than 500 pounds of plastic waste to protect marine life.',
            image: '',
            date: 'May 10, 2025',
        },
        {
            title: 'Community Garden Project',
            category: 'Sustainability',
            description: 'Created a sustainable community garden that now provides fresh produce to local food banks.',
            image: '',
            date: 'July 3, 2025',
        },
        {
            title: 'Elderly Care Program',
            category: 'Community',
            description: 'Organized weekly visits to nursing homes, providing companionship and assistance to elderly residents.',
            image: '/Users/musahhilrifas/Documents/Next.JS/Iconic Youth/iconic-youth/public/App.png',
            date: 'Feb 22, 2025',
        },
        {
            title: 'Youth Mentorship Workshop',
            category: 'Education',
            description: 'Mentored over 80 high school students on career guidance, college preparation, and leadership skills.',
            image: '',
            date: 'April 8, 2025',
        },
        {
            title: 'Health Awareness Campaign',
            category: 'Health',
            description: 'Conducted health check-ups and awareness sessions in underserved communities, reaching over 300 individuals.',
            image: '',
            date: 'January 10, 2025',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/hero/banner-2.png"
                        alt="Our Projects"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Our Projects
                    </h1>
                    <p className="text-xl md:text-2xl text-white opacity-90">
                        Making a difference through action and community engagement
                    </p>
                </div>
            </section>

            {/* Upcoming Projects */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="MAKE AN IMPACT"
                        title="Upcoming Projects"
                        description="Join us in our upcoming initiatives and be part of the positive change in our community"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {upcomingProjects.map((project, idx) => (
                            <UpcomingProjectCard key={idx} {...project} index={idx} />
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                            View All Upcoming Projects
                            <ChevronRight size={24} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Past Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="OUR ACHIEVEMENTS"
                        title="Past Projects"
                        description="Explore our completed initiatives and the positive impact we've made in our community"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {pastProjects.map((project, idx) => (
                            <PastProjectCard key={idx} {...project} index={idx} />
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                            Browse Project Archive
                            <ChevronRight size={24} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}