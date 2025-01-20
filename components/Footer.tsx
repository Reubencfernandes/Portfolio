import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 font-inter">
            <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Reuben Fernandes</p>
                <p className="text-sm text-gray-400">Made with Next.js + Tailwind CSS + GitHub Copilot</p>
            </div>
        </footer>
    );
};

export default Footer;