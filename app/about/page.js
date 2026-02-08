'use client';

import { Target, Users, Lightbulb, TrendingUp, Heart, BookOpen, Briefcase, AlertTriangle, Leaf, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const AboutPage = () => {
    const boardMembers = {
        advisory: [
            { name: 'AG. Anver', role: 'Retired Principal', image: '/about/advisory/anver.jpg' },
            { name: 'M. Abdul Razak', role: 'Lecturer', image: '/about/advisory/abdul razak.jpg' },
            { name: 'Riswan Salihu', role: 'Journalist', image: '/about/advisory/riswan.jpg' },
            { name: 'MC. Jalaldeen', role: 'ACCD', image: '/about/advisory/jalaldeen.jpg' },
            { name: 'MAL. Ifthikar', role: 'Auditor', image: '/about/advisory/ifthikar.jpg' },
            { name: 'AL. Naseefa', role: 'Principal', image: '/about/advisory/naseefa.jpg' },
            { name: 'Ashraq Ismail', role: 'Counsellor', image: '/about/advisory/ismail.jpg' },
        ],
        directors: [
            { name: 'U. Mohamed Thilshan', role: 'Founder & President', image: '/about/board/thilshan.jpg' },
            { name: 'M.H. Afrath Ahamed', role: 'Seceratery', image: '/about/board/afrath.jpg' },
            { name: 'A.M. Mohamed', role: 'Tresurer', image: '/about/board/mohamed.jpg' },
        ],
        executive: [
            { name: 'Zimam Musthaq', role: 'Chairman', image: '/about/executive/Zimam Musthaq.jpg' },
            { name: 'S. Thanis Ahamed', role: 'National Coordinator', image: '/about/executive/Thanis Ahamed.jpg' },
            { name: 'R. Fathima Shabnam', role: 'Admin Coordinator', image: '/about/executive/sabnam.jpg' },
            { name: 'A.N. Fathima Imzama', role: 'Assistant Admin Coordinator', image: '/about/executive/imzama.jpg' },
            { name: 'H. Sahan Ahamed', role: 'Project Coordinator', image: '/about/executive/sahan ahamed.jpg' },
            { name: 'R. Lafry Ahamed', role: 'Assistant Project Coordinator', image: '/about/executive/lafry.jpg' },
            { name: 'A.L. Ahamed Sahath', role: 'Akkaraipattu Coordinator', image: '/about/executive/Ahamed Sahath.jpg' },
            { name: 'B. Althaf Ahamed', role: 'Assistant Akkaraipattu Coordinator', image: '/about/executive/Althaf Ahamed.jpg' },
            { name: 'A. Mufeedha', role: 'Girls Coordinator', image: '/about/executive/mufeedha.jpg' },
            { name: 'R. Fathima Sheeba', role: 'Assistant Girls Coordinator', image: '/about/executive/sheeba.jpg' },
        ],
        editorial: [
            { name: 'R.F. Shafnam Dhilshar', role: 'Chief Editor', image: '/about/editorial/dilshar.jpg' },
            { name: 'A.S. Afnan Ahamed', role: 'Media Coordinator', image: '/about/editorial/afnan.jpg' },
            { name: 'S. Dilshath Maryam', role: 'Designer', image: '/about/editorial/dhilsath maryam.jpg' },
            { name: 'Y. Fatheena', role: 'Designer', image: '/about/editorial/fatheena.jpg' },
            { name: 'R. Aneesa', role: 'Designer', image: '/about/editorial/aneesa.jpg' },
            { name: 'F.F. Habsana', role: 'Designer', image: '/about/editorial/habsana.jpg' },
            { name: 'I. Iffa Nas-hath', role: 'Content Creator', image: '/about/editorial/nashath.jpg' },
            { name: 'M. Muhannath Ahamed', role: 'Social Media Administrator', image: '/about/editorial/muhannath.jpg' },
            { name: 'A.H. Iffeth', role: 'Social Media Administrator', image: '/about/editorial/iffeth.jpg' },
        ],
        digitalOps: [
            { name: 'H.Hamsath Umar', role: 'Chief - Digital Operations', image: '/about/Digital/Hamsath.jpg' },
            { name: 'A. Haaniq Ahameth', role: 'Documentation Executive', image: '/about/Digital/Haaniq.jpg' },
            { name: 'R.A. Aathif', role: 'Website Administrator', image: '/about/Digital/aathif.jpg' },
            { name: 'S. Fathima Zahama', role: 'Assistant Documentation Executive', image: '/about/Digital/zahama.jpg' },
            { name: 'Z. Sharaf Ahamed', role: 'Assistant Website Administrator', image: '/about/Digital/sharaf.jpg' },
            { name: 'J. Thooba Zabnam', role: 'Account Assistant', image: '/about/Digital/Thooba.jpg' },
            { name: 'M. Ayas Ahamed', role: 'Account Assistant', image: '/about/Digital/Ayas ahamed.jpg' },
            { name: 'M.A.F. Sanoafer Afroas', role: 'Account Assistant', image: '/about/Digital/afroos.jpg' },
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

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-teal-500">Story</span>
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in">
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Iconic Youths Sri Lanka began in 2014 with a shared vision among a group of school friends led by founder Mohamed Thilshan. What started within school corridors under the name "Islamic Way" was driven by a simple purpose, to serve others and uplift communities. In 2018, the organization evolved into Iconic Youths, embracing a broader and more inclusive identity focused on youth leadership and social impact.
                            </p>
                            <p>
                                Today, Iconic Youths is a formally registered Guaranteed Limited Non-Government Organization (NGO) <span className="font-semibold text-teal-600">(Registration No: GA00303083)</span>, reflecting our commitment to transparency and long-term service. From humble beginnings, we have grown into a nationwide movement supported by over <span className="font-semibold text-teal-600">1,000 volunteers</span>, completing <span className="font-semibold text-teal-600">500+ projects</span>, partnering with <span className="font-semibold text-teal-600">40+ institutions</span>, and positively impacting more than <span className="font-semibold text-teal-600">100,000 lives</span> across Sri Lanka.
                            </p>
                            <p>
                                Proudly politically and religiously neutral, we welcome individuals from all backgrounds who share a passion for humanity. As we continue to expand our reach, our mission remains unchanged, to empower youth, strengthen communities, and inspire lasting positive change.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission, Vision, Strategy */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <AnimatedSection animation="slide-in-left">
                            <div className="bg-cyan-50 rounded-2xl p-8 border-l-4 border-cyan-500">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                                        <Lightbulb className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Fostering Youths Embracing Societal Transformation as Their Core Lifestyle
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Mission */}
                        <AnimatedSection animation="slide-in-right">
                            <div className="bg-teal-50 rounded-2xl p-8 border-l-4 border-teal-500">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                                        <Target className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Envisioning a society transformed by resilient, innovative, and compassionate Iconic youths who contributing to the betterment of communities as a natural part of their lifestyle by actively engaging in social service, and leaving a lasting positive impact on the world
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

            {/* What We Do */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What We <span className="text-teal-500">Do</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Our work spans multiple areas of community development, each designed to create lasting positive change
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Community Support */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                                    <Heart className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Support</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We stand beside communities in times of need, delivering relief initiatives, social outreach programs, and practical support that bring stability, hope, and reassurance to families facing challenges.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Education & Future Readiness */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                                    <BookOpen className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Future Readiness</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Education opens the door to opportunity. We support financially challenged students, organize career guidance programs, and create learning pathways that help young individuals move confidently toward a brighter future.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Livelihood Development */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                                    <Briefcase className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Livelihood Development</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Sustainable communities are built when individuals have the means to support themselves. Our livelihood initiatives focus on creating opportunities that promote independence, dignity, and long-term economic stability.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Disaster Response */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                    <AlertTriangle className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Disaster Response</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    During times of crisis, timely support can make all the difference. Our volunteers actively respond to natural disasters and emergencies, providing essential assistance to affected communities with compassion and urgency.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Environmental Responsibility */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                                    <Leaf className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Responsibility</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Protecting the environment is a responsibility we all share. Through awareness campaigns and community-driven initiatives, we encourage sustainable practices that safeguard the world for future generations.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Youth Leadership */}
                        <AnimatedSection animation="slide-up">
                            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                                    <Award className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth Leadership</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We believe youth are not just the leaders of tomorrow, but the changemakers of today. By creating platforms for engagement and service, we empower young people to develop leadership skills while contributing meaningfully to society.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
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
                                <a href="/join" className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 inline-block">
                                    Become a Member
                                </a>
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