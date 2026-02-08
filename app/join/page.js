'use client';

import { Users, ArrowRight, CheckCircle2, Briefcase, Edit, Monitor } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const JoinPage = () => {
    const pathways = [
        {
            title: "Start as Volunteer",
            description: "Every journey with Iconic Youths begins as a volunteer. This is where you learn our values, understand how we work, and become part of real community impact. As a volunteer, you actively take part in projects, events, and outreach programs, working alongside a team that serves with purpose. Consistency matters here. When you show commitment through action and teamwork, you become eligible to move forward into membership.",
            icon: Users,
            color: "teal"
        },
        {
            title: "Become a Member",
            description: "Membership is more than a title, it's recognition of your dedication. As a member, you represent Iconic Youths Sri Lanka with responsibility and pride. You will be invited to member meetings and member-focused events, where you contribute ideas, support planning, and help strengthen the organization from within. Members also receive the official Iconic Youths T-shirt and are expected to carry the values of the organization in how they serve, speak, and lead in society. Once you become a member, you can apply for higher roles based on your interests and strengths.",
            icon: CheckCircle2,
            color: "cyan"
        },
        {
            title: "Support the ExCo",
            description: "If you are someone who enjoys leading, planning, and taking responsibility, the Executive Committee is a path you can grow into. The ExCo supports the direction of the organization by coordinating projects, managing teams, and ensuring everything runs smoothly. These roles require discipline, teamwork, and the ability to make decisions with the mission in mind. It's a space for members who want to help guide Iconic Youths forward and carry the organization's responsibilities with maturity.",
            icon: Briefcase,
            color: "teal"
        },
        {
            title: "Involve in Editorial",
            description: "If you are strong in writing, storytelling, media coordination, or documentation, the Editorial Panel is where you can shine. This team helps capture the heart of Iconic Youths by documenting initiatives, sharing stories from the field, preparing announcements, and shaping how the public sees our work. Editorial work is not just about content, it's about communicating impact with honesty and clarity, so supporters, partners, and communities understand what we stand for.",
            icon: Edit,
            color: "purple"
        },
        {
            title: "Explore Digital",
            description: "For members interested in design, social media, video, photography, websites, or digital systems, the Digital Operations Unit is the perfect place to contribute your skills. This team strengthens the organization's online presence and supports internal operations, helping Iconic Youths stay active, visible, and organized. Whether it's creating content, managing platforms, or building digital tools for smoother workflows, digital operations plays a key role in helping our mission reach more people.",
            icon: Monitor,
            color: "cyan"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            teal: {
                bg: "from-teal-50 to-cyan-50",
                icon: "bg-teal-500",
                border: "border-teal-500"
            },
            cyan: {
                bg: "from-cyan-50 to-teal-50",
                icon: "bg-cyan-500",
                border: "border-cyan-500"
            },
            purple: {
                bg: "from-purple-50 to-pink-50",
                icon: "bg-purple-500",
                border: "border-purple-500"
            }
        };
        return colors[color] || colors.teal;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-teal-600 to-cyan-500 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>

                <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Join the <span className="text-cyan-200">Movement</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
                        Your journey with Iconic Youths starts here. Discover the pathways to making a real impact.
                    </p>
                </AnimatedSection>
            </section>

            {/* Pathways Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {pathways.map((pathway, idx) => {
                            const colors = getColorClasses(pathway.color);
                            const Icon = pathway.icon;

                            return (
                                <AnimatedSection key={idx} animation="fade-in">
                                    <div className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 md:p-10 border-l-4 ${colors.border} hover:shadow-xl transition-all`}>
                                        <div className="flex items-start gap-6">
                                            <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                                                <Icon className="text-white" size={32} />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                                    {pathway.title}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {pathway.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Closing Statement & CTA */}
            <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection animation="scale-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Make an Impact?
                        </h2>
                        <p className="text-xl text-teal-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                            No matter where you start, your journey here is built on one thing: consistent service. If you're ready to grow while making a real impact, you belong here.
                        </p>

                        <a
                            href="https://tally.so/r/5B1jjo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Join Now
                            <ArrowRight size={24} />
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default JoinPage;
