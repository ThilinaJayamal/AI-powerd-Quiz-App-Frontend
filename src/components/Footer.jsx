const Footer = () => {
    const linkSections = [
        {
            title: "Explore",
            links: ["Home", "Generate Quiz", "Dashboard", "Categories", "About"]
        },
        {
            title: "Support",
            links: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"]
        },
        {
            title: "Community",
            links: ["GitHub", "Twitter", "LinkedIn"]
        }
    ];

    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 text-gray-300">
            {/* Main Section */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-gray-700/40">
                
                {/* Brand / Description */}
                <div className="max-w-sm">
                    <h2 className="text-2xl font-semibold text-white">
                        Quiz?Master
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Create intelligent quizzes instantly using AI.  
                        Improve learning, test knowledge, and make assessments easier.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-white mb-3 text-lg">{section.title}</h3>
                            <ul className="text-sm space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-white transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Area */}
            <p className="py-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Quiz?Master. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
