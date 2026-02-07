'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const SectionTitle = ({ subtitle, title, description }) => (
    <div className="text-center mb-12 animate-fade-in">
        {subtitle && <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">{subtitle}</span>}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{title}</h2>
        {description && <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">{description}</p>}
    </div>
);

const BlogCard = ({ title, excerpt, image, author, date, category, index }) => {
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
                <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                        <User className="mr-2 text-teal-500" size={14} />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="mr-2 text-teal-500" size={14} />
                        <span>{date}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors cursor-pointer line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

                <button className="text-teal-500 font-medium hover:text-teal-600 inline-flex items-center group">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

const CategoryButton = ({ label, count, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 inline-flex items-center ${active
            ? 'bg-teal-500 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
    >
        {label} <span className={`ml-2 text-sm ${active ? 'text-teal-100' : 'text-gray-500'}`}>({count})</span>
    </button>
);

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { label: 'All', value: 'all', count: 9 },
        { label: 'Community Service', value: 'community', count: 3 },
        { label: 'Leadership', value: 'leadership', count: 2 },
        { label: 'Environment', value: 'environment', count: 2 },
        { label: 'Advocacy', value: 'advocacy', count: 2 },
    ];

    const blogPosts = [
        {
            title: 'The Impact of Youth-Led Community Service',
            excerpt: 'Exploring how youth initiatives are transforming communities through innovative service projects and fresh perspectives on social issues.',
            image: '',
            author: 'Emma Rodriguez',
            date: 'June 15, 2025',
            category: 'Community Service',
        },
        {
            title: '5 Leadership Skills I Developed Through Iconic Youth',
            excerpt: 'A personal reflection on how being part of Iconic Youth has transformed my approach to leadership and teamwork.',
            image: '',
            author: 'Jason Chen',
            date: 'May 28, 2025',
            category: 'Leadership',
        },
        {
            title: 'Environmental Activism: Small Steps, Big Impact',
            excerpt: 'How our recent beach cleanup initiative sparked a larger conversation about environmental responsibility.',
            image: '',
            author: 'Aisha Johnson',
            date: 'May 10, 2025',
            category: 'Environment',
        },
        {
            title: 'Bridging the Generation Gap Through Mentorship',
            excerpt: 'Insights from our intergenerational mentorship program and how it\'s benefiting both youth and seniors in unexpected ways.',
            image: '',
            author: 'Michael Patel',
            date: 'April 22, 2025',
            category: 'Community Service',
        },
        {
            title: 'The Power of Youth Voices in Policy Making',
            excerpt: 'How our advocacy workshop empowered young people to engage with local government and influence policy decisions.',
            image: '',
            author: 'Sarah Williams',
            date: 'April 5, 2025',
            category: 'Advocacy',
        },
        {
            title: 'Digital Literacy: Empowering the Next Generation',
            excerpt: 'Reflections on our technology workshop series and its impact on bridging the digital divide in underserved communities.',
            image: '',
            author: 'David Thompson',
            date: 'March 18, 2025',
            category: 'Education',
        },
        {
            title: 'From Volunteer to Leader: My Journey',
            excerpt: 'A personal story about growth, challenges, and the transformative power of community service leadership.',
            image: '',
            author: 'Lisa Martinez',
            date: 'March 2, 2025',
            category: 'Leadership',
        },
        {
            title: 'Sustainable Living: Tips from Our Community Garden',
            excerpt: 'Practical advice and lessons learned from our community garden project about sustainable urban farming.',
            image: '',
            author: 'Chris Anderson',
            date: 'February 14, 2025',
            category: 'Environment',
        },
        {
            title: 'Youth Activism in the Digital Age',
            excerpt: 'Exploring how social media and digital tools are amplifying youth voices and driving social change.',
            image: '',
            author: 'Nina Kumar',
            date: 'January 28, 2025',
            category: 'Advocacy',
        },
    ];

    const getFilteredPosts = () => {
        if (activeCategory === 'all') return blogPosts;

        const categoryLabel = categories.find(c => c.value === activeCategory)?.label;
        return blogPosts.filter(post => post.category === categoryLabel);
    };

    const filteredPosts = getFilteredPosts();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-cyan-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">OUR STORIES</span>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2 mb-6">
                                The <span className="text-teal-500">Blog</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Explore insightful articles written by our members, sharing experiences, knowledge, and perspectives on youth leadership, community service, and personal growth.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl animate-slide-in-right">
                            <Image
                                src="/public/App.png"
                                alt="The Blog"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Tag className="text-teal-500" size={20} />
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.value}
                                label={category.label}
                                count={category.count}
                                active={activeCategory === category.value}
                                onClick={() => setActiveCategory(category.value)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="INSIGHTS & EXPERIENCES"
                        title="Latest Blog Posts"
                        description="Discover articles written by our members sharing their experiences, insights, and knowledge"
                    />

                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {filteredPosts.map((post, idx) => (
                                <BlogCard key={idx} {...post} index={idx} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                        </div>
                    )}

                    <div className="text-center">
                        <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                            View All Articles
                            <ArrowRight size={24} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}