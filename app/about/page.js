'use client';

import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const AboutPage = () => {
    const boardMembers = {
        advisory: [
            { name: 'Dr. James Wilson', role: 'Board Chair', image: '/about/advisory/IMG-20251027-WA0081.jpg' },
            { name: 'Prof. Sarah Goldsmith', role: 'Vice President', image: '/about/advisory/IMG-20251027-WA0076.jpg' },
            { name: 'Dr. Michael Chen', role: 'Community Relations', image: '/about/advisory/IMG-20251027-WA0077.jpg' },
            { name: 'Emily Rodriguez', role: 'Youth Advocate', image: '/about/advisory/IMG-20251027-WA0078.jpg' },
            { name: 'Robert Martinez', role: 'Strategic Advisor', image: '/about/advisory/IMG-20251027-WA0079.jpg' },
            { name: 'Jennifer Lee', role: 'Policy Advisor', image: '/about/advisory/IMG-20251027-WA0085.jpg' },
        ],
        directors: [
            { name: 'John Doe', role: 'Chief Executive', image: '/about/M.H. Afrath Ahamed.jpg' },
            { name: 'Samuel Green', role: 'Operations Director', image: '/about/Mohamed Abdul Majeed .jpg' },
            { name: 'Lisa Johnson', role: 'Programs Manager', image: '/about/Thilshan Uwais .jpg' },
        ],
        executive: [
            { name: 'Alex Chen', role: 'Executive Officer', image: '/about/executive/Copy of Zimam Musthaq - Chairman.jpg' },
            { name: 'Priya Patel', role: 'Senior Executive', image: '/about/executive/Copy of S.Thanis Ahamed - Akp Coordinater.jpg' },
            { name: 'David Kim', role: 'Executive Coordinator', image: '/about/executive/FB_IMG_1753201358333.jpg' },
            { name: 'Maya Wilson', role: 'Executive Assistant', image: '/about/executive/Fathima Imzama Abdul Nazar-Ass admin coordinator.jpg' },
            { name: 'James Brown', role: 'Executive Manager', image: '/about/executive/IMG-20251027-WA0035.jpg' },
            { name: 'Sophie Turner', role: 'Executive Lead', image: '/about/executive/IMG-20251027-WA0039.jpg' },
            { name: 'Michael Scott', role: 'Executive Director', image: '/about/executive/A L.Ahamed Sahath_.jpg' },
            { name: 'Rachel Green', role: 'Executive Supervisor', image: '/about/executive/Althaf Ahamed.JPG' },
            { name: 'Tom Anderson', role: 'Executive Planner', image: '/about/executive/WhatsApp Image 2026-02-07 at 11.49.11.jpeg' },
            { name: 'Nina Patel', role: 'Executive Strategist', image: '/about/executive/WhatsApp Image 2026-02-07 at 11.35.55.jpeg' },
        ],
        editorial: [
            { name: 'Sarah Mitchell', role: 'Editor-in-Chief', image: '/about/editorial/WhatsApp Image 2026-02-07 at 11.36.51.jpeg' },
            { name: 'Daniel Cooper', role: 'Managing Editor', image: '/about/editorial/A.S.Afnan Ahamed.jpg' },
            { name: 'Emma Watson', role: 'Content Editor', image: '/about/editorial/Copy of S.Dhilsath Maryam.jpg' },
            { name: 'Oliver Smith', role: 'Copy Editor', image: '/about/editorial/WhatsApp Image 2026-02-07 at 11.38.04.jpeg' },
            { name: 'Isabella Garcia', role: 'Senior Writer', image: '/about/editorial/Copy of Aneesa Rafeek .jpg' },
            { name: 'Lucas Johnson', role: 'Feature Writer', image: '/about/editorial/WhatsApp Image 2026-02-07 at 11.50.22.jpeg' },
            { name: 'Mia Rodriguez', role: 'News Editor', image: '/about/editorial/WhatsApp Image 2026-02-07 at 11.48.12.jpeg' },
            { name: 'Ethan Williams', role: 'Creative Director', image: '/about/editorial/M_Muhannath_Ahamed_FaceBook.jpg' },
            { name: 'Ava Martinez', role: 'Publications Manager', image: '/about/editorial/A.H.Iffeth.jpg' },
        ],
        digitalOps: [
            { name: 'Ryan Thompson', role: 'Digital Operations Lead', image: '/about/Digital/H.Hamsath Umar.jpg' },
            { name: 'Hannah Lee', role: 'Documentation Manager', image: '/about/Thilshan Uwais .jpg' },
            { name: 'Chris Evans', role: 'Systems Administrator', image: '/about/Digital/WhatsApp Image 2026-01-07 at 18.07.46.jpeg' },
            { name: 'Sophia Chen', role: 'Digital Coordinator', image: '/about/Digital/WhatsApp Image 2026-02-07 at 11.35.55.jpeg' },
            { name: 'Noah Davis', role: 'Technical Writer', image: '/about/Digital/WhatsApp Image 2026-02-07 at 12.16.06.jpeg' },
            { name: 'Olivia Brown', role: 'Operations Specialist', image: '/about/Digital/J.Thooba Zabnam.jpg' },
            { name: 'Liam Wilson', role: 'Documentation Lead', image: '/about/Digital/M.Ayas Ahamed.jpg' },
            { name: 'Emily Taylor', role: 'Digital Analyst', image: '/about/Digital/WhatsApp Image 2026-02-07 at 11.49.11.jpeg' },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-teal-600 to-cyan-500 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/hero/banner-1.png"
                        alt="About Iconic Youth"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                <AnimatedSection className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        About Iconic Youth
                    </h1>
                    <p className="text-xl md:text-2xl text-white opacity-90">
                        Empowering youth to create positive change in our community since 2015
                    </p>
                </AnimatedSection>
            </section>

            {/* Mission, Vision, Strategy */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <AnimatedSection animation="slide-in-left">
                            <div className="bg-teal-50 rounded-2xl p-8 border-l-4 border-teal-500">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                                        <Target className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To empower young people to become agents of positive change through community service, leadership development, and creating a platform where youth can learn how to meaningfully impact society and develop essential life skills.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Vision */}
                        <AnimatedSection animation="slide-in-right">
                            <div className="bg-cyan-50 rounded-2xl p-8 border-l-4 border-cyan-500">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                                        <Lightbulb className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To create a world where young people are recognized as education contributors, empowered with the resources and support to address social issues, and where their voices are heard in decision-making processes that affect their communities.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Strategy */}
                    <AnimatedSection animation="fade-in" className="mt-12">
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-3xl p-12 text-white">
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                                    <TrendingUp className="text-white" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">Our Strategy</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Engage</h3>
                                    <p className="text-teal-50">
                                        We engage youth through interactive programs, volunteer opportunities, and social events that inspire them to take action in their communities.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Educate</h3>
                                    <p className="text-teal-50">
                                        We provide training, workshops, and resources to develop the skills needed for effective community service and leadership.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Empower</h3>
                                    <p className="text-teal-50">
                                        We create platforms for youth to lead initiatives, make decisions, and address community challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Club Office Bearers */}
            <section id="club-office-bearers" className="py-20 bg-gradient-to-r from-teal-700 to-teal-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Meet Our Club Office Bearers
                        </h2>
                        <p className="text-teal-100 text-lg">
                            A team that leads with heart and purpose
                        </p>
                    </AnimatedSection>

                    {/* Advisory Board */}
                    <AnimatedSection animation="fade-in" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Advisory Board</h3>
                            <p className="text-teal-100">Guiding our mission with expertise and vision</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                            {boardMembers.advisory.map((member, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 w-full max-w-[200px]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden mb-4 shadow-lg relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="font-bold text-white text-lg mb-1 text-center">{member.name}</h4>
                                        <p className="text-yellow-400 font-medium text-sm text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Board of Directors */}
                    <AnimatedSection animation="fade-in" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Board of Directors</h3>
                            <p className="text-teal-100">Leading our initiatives with passion and dedication</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                                {boardMembers.directors.map((member, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                                        <div className="flex flex-col items-center">
                                            <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden mb-4 shadow-lg relative">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className="font-bold text-white text-lg mb-1 text-center">{member.name}</h4>
                                            <p className="text-yellow-400 font-medium text-sm text-center">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Board of Executive */}
                    <AnimatedSection animation="fade-in" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Board of Executive</h3>
                            <p className="text-teal-100">Driving excellence in execution and operations</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                            {boardMembers.executive.map((member, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 w-full max-w-[200px]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden mb-4 shadow-lg relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                style={{ objectPosition: "50% 20%" }}
                                            />
                                        </div>
                                        <h4 className="font-bold text-white text-lg mb-1 text-center">{member.name}</h4>
                                        <p className="text-yellow-400 font-medium text-sm text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Editorial Board */}
                    <AnimatedSection animation="fade-in" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Editorial Board</h3>
                            <p className="text-teal-100">Crafting compelling stories and content</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                            {boardMembers.editorial.map((member, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 w-full max-w-[200px]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden mb-4 shadow-lg relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                style={{ objectPosition: "50% 20%" }}
                                            />
                                        </div>
                                        <h4 className="font-bold text-white text-lg mb-1 text-center">{member.name}</h4>
                                        <p className="text-yellow-400 font-medium text-sm text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Digital Operation and Documentation */}
                    <AnimatedSection animation="fade-in" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Digital Operation and Documentation</h3>
                            <p className="text-teal-100">Managing our digital infrastructure and knowledge base</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                            {boardMembers.digitalOps.map((member, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 w-full max-w-[200px]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden mb-4 shadow-lg relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                style={{ objectPosition: "50% 20%" }}
                                            />
                                        </div>
                                        <h4 className="font-bold text-white text-lg mb-1 text-center">{member.name}</h4>
                                        <p className="text-yellow-400 font-medium text-sm text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>



                    <div className="text-center mt-12">
                        <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                            View All Members
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection animation="scale-in">
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-12">
                            <Users className="mx-auto mb-6 text-teal-600" size={64} />
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Join Our Community
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Be part of a movement that's creating real change. Whether you want to volunteer,
                                lead a project, or support our cause, there's a place for you at Iconic Youth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105">
                                    Become a Member
                                </button>
                                <button className="bg-white text-teal-600 border-2 border-teal-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all transform hover:scale-105">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;