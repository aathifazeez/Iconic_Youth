import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">IY</span>
                            </div>
                            <span className="text-xl font-bold">Iconic Youth</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Empowering youth to create positive change in communities worldwide through action, education, and collaboration.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Our Projects', 'Get Involved', 'Blog', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Get Involved</h4>
                        <ul className="space-y-2">
                            {['Volunteer', 'Donate', 'Partner With Us', 'Become a Mentor', 'Join Events'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Stay updated with our latest projects and events</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <button className="bg-teal-500 px-6 py-2 rounded-r-full hover:bg-teal-600 transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 Iconic Youth. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                            <Link key={link} href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;