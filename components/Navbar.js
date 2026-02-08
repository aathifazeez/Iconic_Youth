'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">IY</span>
                        </div>
                        <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                            Iconic Youth
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`font-medium transition-colors hover:text-teal-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Join Us Button */}
                    <Link href="/join" className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105">
                        Join Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden"
                    >
                        {mobileMenuOpen ? (
                            <X className="text-gray-900" size={24} />
                        ) : (
                            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="px-4 py-3">
                        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-all">
                            Join Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;