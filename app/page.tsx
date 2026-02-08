'use client';

import { useState, useEffect } from 'react';
import { Users, Target, TrendingUp, Award, ChevronRight, Heart, CheckCircle2, Landmark } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import HeroSlider from '@/components/HeroSlider';
import Image from 'next/image';

const HomePage = () => {
  const [counters, setCounters] = useState({ projects: 0, valuation: 0, members: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 100, valuation: 10000000, members: 100 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          projects: Math.floor((targets.projects / steps) * step),
          valuation: Math.floor((targets.valuation / steps) * step),
          members: Math.floor((targets.members / steps) * step)
        });
        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) animateCounters();
    }, { threshold: 0.5 });

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Community Cleanup Drive",
      desc: "Join us in making our neighborhoods cleaner and greener through organized community efforts.",
      image: "/projects/cleanup.png",
      category: "Environment"
    },
    {
      title: "Tree Plantation Campaign",
      desc: "Plant trees to combat climate change and create a sustainable future for generations to come.",
      image: "/projects/tree-planting.png",
      category: "Sustainability"
    },
    {
      title: "Educational Mentorship for Youth",
      desc: "Empowering young minds through one-on-one mentorship and educational support programs.",
      image: "/projects/mentorship.png",
      category: "Education"
    }
  ];

  const leaders = [
    { name: "Michael Brown", role: "Founder", quote: "Together we can create lasting change in our communities." },
    { name: "Jessica Garcia", role: "Director", quote: "Youth empowerment is the key to a brighter tomorrow." },
    { name: "Alex Smith", role: "Coordinator", quote: "Every small action contributes to a larger movement." }
  ];

  const ambassadors = [
    { name: "Community Leader", quote: "During a difficult time for our community, Iconic Youths stepped in without hesitation. Their support brought relief, but more importantly, it brought hope. We will always remember their kindness.", rating: 5 },
    { name: "School Principal", quote: "The educational support provided to our students has been invaluable. Seeing young volunteers dedicate their time for the future of our children is truly inspiring.", rating: 5 },
    { name: "Local Resident", quote: "Iconic Youths does not just deliver assistance — they connect with people, listen to their needs, and respond with compassion. Their presence has positively impacted many families in our area.", rating: 5 }
  ];

  const supportOptions = [
    "Donate to our annual scholarship fund",
    "Volunteer for upcoming community events",
    "Sponsor a youth leadership program"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSlider />

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in Akkaraipattu and now operating across Sri Lanka, Iconic Youths is a nationwide movement driven by passionate young individuals committed to uplifting communities.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From education initiatives and environmental efforts to relief programs and youth development, our work is guided by one belief, meaningful change begins when individuals choose to step forward.
                Today, with 100+ active volunteers and the support of our growing network of partners, we continue to expand our reach and deepen our impact.
              </p>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition-all transform hover:scale-105 inline-flex items-center">
                Learn More <ChevronRight className="ml-2" size={20} />
              </button>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right">
              <div className="w-full h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Users size={120} className="text-white opacity-80" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id="impact-section" className="py-20 bg-gradient-to-r from-teal-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact In Numbers</h2>
            <p className="text-teal-100">See how we're making a difference in communities worldwide</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, value: counters.projects, suffix: '+', label: 'Projects' },
              { icon: TrendingUp, value: counters.valuation.toLocaleString(), suffix: '+', label: 'Valuation' },
              { icon: Users, value: counters.members, suffix: '+', label: 'Members' }
            ].map((stat, idx) => (
              <AnimatedSection key={idx} animation="scale-in">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all transform hover:scale-105">
                  <stat.icon className="mx-auto mb-4 text-white" size={48} />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}{stat.suffix}</div>
                  <div className="text-teal-100 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide bg-teal-50 px-4 py-2 rounded-full inline-block mb-4">
              EXECUTIVE BOARD
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              We Are Leaders Who <span className="text-teal-500">Work Together!</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We believe in youth leadership through service. Our executive team guides and empowers members to become tomorrow's leaders—together.
            </p>
          </AnimatedSection>

          {/* Leadership Cards - Centered */}
          <AnimatedSection animation="fade-in">
            <div className="relative h-[450px] max-w-5xl mx-auto flex items-center justify-center mb-12">
              {/* Treasurer Card - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-96 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 hover:-rotate-3 transition-all duration-300 hover:scale-105 z-20 border-4 border-teal-400">
                <div className="relative h-full">
                  <Image
                    src="/about/Mohamed Abdul Majeed .jpg"
                    alt="John Doe - Treasurer"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-20">
                    <h3 className="text-white font-bold text-xl mb-1">John Doe</h3>
                    <p className="text-teal-300 text-base font-semibold">Treasurer</p>
                  </div>
                </div>
              </div>

              {/* President Card - Center */}
              <div className="relative z-30 w-80 h-[420px] bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-gray-800">
                <div className="relative h-full">
                  <Image
                    src="/about/Thilshan Uwais .jpg"
                    alt="Samuel Green - President"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-24">
                    <h3 className="text-white font-bold text-2xl mb-1">Samuel Green</h3>
                    <p className="text-teal-300 text-lg font-semibold">President</p>
                  </div>
                </div>
              </div>

              {/* Secretary Card - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-96 bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-300 hover:scale-105 z-20 border-4 border-cyan-400">
                <div className="relative h-full">
                  <Image
                    src="/about/M.H. Afrath Ahamed.jpg"
                    alt="Jane Smith - Secretary"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-20">
                    <h3 className="text-white font-bold text-xl mb-1">Jane Smith</h3>
                    <p className="text-teal-300 text-base font-semibold">Secretary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <a
                href="/about#club-office-bearers"
                className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
              >
                View Our Leadership Team <ChevronRight className="ml-2" size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">EXPLORE MORE</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Latest <span className="text-teal-500">Projects</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover our ongoing initiatives and see how you can get involved in making a real difference in your community.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} animation="slide-up">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-cyan-400 to-teal-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-teal-500 text-sm font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.desc}</p>
                    <a href="#" className="text-teal-500 font-medium hover:text-teal-600 inline-flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all transform hover:scale-105 inline-flex items-center">
              EXPLORE ALL PROJECTS <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-3xl p-10 text-white">
                <div className="flex items-center mb-6">
                  <Heart className="mr-3" size={32} />
                  <h2 className="text-3xl font-bold">Support Our Cause</h2>
                </div>
                <p className="mb-8 text-teal-50">
                  Your support enables us to expand our reach and create even more opportunities for young people to make a difference.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="font-bold text-xl">What Your Donation Provides:</h3>
                  {supportOptions.map((option, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-teal-50">{option}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 w-full">
                  DONATE NOW
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="flex items-center mb-6">
                  <Landmark className="mr-3 text-teal-600" size={32} />
                  <h2 className="text-3xl font-bold text-gray-900">Bank Details</h2>
                </div>

                <p className="text-gray-600 mb-8">
                  Support our mission by making a direct bank transfer. Your contributions help us empower youth and create lasting change.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                    <h4 className="font-bold text-gray-900 mb-1">Name</h4>
                    <p className="text-gray-700">Iconic Youths</p>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                    <h4 className="font-bold text-gray-900 mb-1">Account Number</h4>
                    <p className="text-gray-700 font-mono text-lg">8172009741</p>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                    <h4 className="font-bold text-gray-900 mb-1">Bank</h4>
                    <p className="text-gray-700">Commercial Bank</p>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                    <h4 className="font-bold text-gray-900 mb-1">Branch</h4>
                    <p className="text-gray-700">Akkaraipattu</p>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                    <h4 className="font-bold text-gray-900 mb-1">SWIFT CODE</h4>
                    <p className="text-gray-700 font-mono">CCEYLKLX</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Causes of Support</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 text-teal-600 flex-shrink-0" size={18} />
                      <span>Right To Education</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 text-teal-600 flex-shrink-0" size={18} />
                      <span>Fasting to Feasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 text-teal-600 flex-shrink-0" size={18} />
                      <span>Cancer care hospital visit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 text-teal-600 flex-shrink-0" size={18} />
                      <span>Children and elders home visit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 text-teal-600 flex-shrink-0" size={18} />
                      <span>Personal requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">MEMBER STORIES</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Our members are our best ambassadors</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from our community members about their experiences and the impact they've made through Iconic Youth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ambassadors.map((amb, idx) => (
              <AnimatedSection key={idx} animation="scale-in">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {amb.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{amb.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(amb.rating)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{amb.quote}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-all transform hover:scale-105 inline-flex items-center">
              READ MORE TESTIMONIALS <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">We're Here To <span className="text-cyan-300">Fight</span></h2>
                <p className="text-teal-50 mb-8 text-lg leading-relaxed">
                  We're committed to breaking down barriers, creating opportunities, and empowering youth to become the leaders and changemakers our world needs.
                </p>

                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold">From Our CEO (9494) 951818</h3>
                  <p className="text-teal-50 leading-relaxed">
                    "At Iconic Youth, we believe that every young person has the potential to create extraordinary change. Our mission is to provide the tools, support, and platform needed to turn that potential into reality."
                  </p>

                  <div className="space-y-3">
                    {[
                      "Build resilient and empowered communities",
                      "Create sustainable leadership programs",
                      "Foster innovation and creative problem-solving",
                      "Promote inclusive and equitable opportunities"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="mr-3 text-cyan-300" size={24} />
                        <span className="text-teal-50">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
                  JOIN THE MOVEMENT
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-6xl">✊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Together We Can Make A Difference</h3>
                <p className="text-gray-600">
                  Join thousands of young changemakers who are already making an impact in their communities. Your journey starts here.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;