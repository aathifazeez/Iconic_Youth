'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock, Heart, CreditCard, Handshake, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const SectionTitle = ({ title, description }) => (
    <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">{title}</h2>
        {description && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{description}</p>}
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
    </div>
);

const ContactInfoCard = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-4 p-4 hover:bg-teal-50 rounded-lg transition-colors">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Icon className="text-teal-600" size={24} />
        </div>
        <div>
            <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
            <p className="text-teal-100">{content}</p>
        </div>
    </div>
);

const DonationCard = ({ icon: Icon, title, description, buttonText }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon className="text-teal-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-600 transition-all transform hover:scale-105">
            {buttonText}
        </button>
    </div>
);

const SocialButton = ({ icon: Icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all transform hover:scale-110 hover:bg-teal-500 group"
    >
        <Icon className="text-teal-600 group-hover:text-white transition-colors" size={24} />
    </a>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-40 bg-gradient-to-r from-teal-600 to-cyan-500 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/hero/banner-3.png"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
                            Have a question or an idea? We'd love to hear from you.
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Get in Touch Card */}
                        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 text-white shadow-2xl animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-teal-100 mb-8 text-lg">
                                Whether you're curious about our services, need support, or just want to say hello — we're here to help.
                            </p>

                            <div className="space-y-6">
                                <ContactInfoCard
                                    icon={MapPin}
                                    title="Our Location"
                                    content="123 Main Street, Suite 101, City, State 12345"
                                />
                                <ContactInfoCard
                                    icon={Mail}
                                    title="Email Us"
                                    content="contact@example.com"
                                />
                                <ContactInfoCard
                                    icon={Phone}
                                    title="Call Us"
                                    content="+1 (555) 123-4567"
                                />
                                <ContactInfoCard
                                    icon={Clock}
                                    title="Working Hours"
                                    content="Monday - Friday: 9am - 5pm
Saturday - Sunday: 10am - 4pm"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl animate-slide-in-right">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this regarding?"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center group"
                                >
                                    Send Message
                                    <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Our Cause Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Support Our Cause"
                        description="Your generosity helps us continue our mission. Every donation, no matter the size, makes a significant impact."
                    />

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <DonationCard
                            icon={Heart}
                            title="One-Time Donation"
                            description="Make a one-time contribution to support our current initiatives and immediate needs."
                            buttonText="Donate Now"
                        />
                        <DonationCard
                            icon={CreditCard}
                            title="Monthly Giving"
                            description="Join our community of monthly donors and help provide sustainable support for our programs."
                            buttonText="Become a Monthly Donor"
                        />
                        <DonationCard
                            icon={Handshake}
                            title="Corporate Sponsorship"
                            description="Partner with us as a business to make a meaningful impact on our community."
                            buttonText="Become a Sponsor"
                        />
                    </div>

                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Other Ways to Give</h3>
                        <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
                            In addition to monetary donations, we also accept in-kind donations, volunteer time, and more.
                        </p>
                        <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                            Learn More About Giving
                        </button>
                    </div>
                </div>
            </section>

            {/* Connect With Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Connect With Us"
                        description="Stay updated with our latest news, events, and initiatives by following us on social media."
                    />

                    <div className="flex justify-center gap-6 mb-16">
                        <SocialButton icon={Facebook} href="#" />
                        <SocialButton icon={Twitter} href="#" />
                        <SocialButton icon={Instagram} href="#" />
                        <SocialButton icon={Linkedin} href="#" />
                        <SocialButton icon={Youtube} href="#" />
                    </div>

                    {/* Newsletter */}
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl">
                        <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-gray-600 text-center mb-8">
                            Get the latest updates delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                            <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}