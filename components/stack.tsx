'use client'

import React from 'react';

const techIcons: { [key: string]: string } = {
    "JavaScript": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "PHP": "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    "Dart": "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
    "C++": "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "C": "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    "Node.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "React.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "Flutter": "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    "Next.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    "MySQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    "MongoDB": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    "Git": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    "Github": "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    "Figma": "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    "AWS Bedrock": "https://d1.awsstatic.com/getting-started-guides/learning/bedrock/bedrock-250-removebg-preview.86d95fc7f9a313f21091222ec7b63e1e30ea52ea.png",
    "Google Gemini API": "https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png",
    "Spline": "https://june-changelog.s3.eu-central-1.amazonaws.com/spline_icon_twitter_removebg_preview_db2832210b.png",
    "Github Copilot": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-icon.png",
    
};

const techCategories = {
    "Programming Languages": {
        title: "Programming Languages",
        technologies: ["JavaScript", "PHP", "Dart", "C++", "Python", "C"]
    },
    "Frameworks/Libraries": {
        title: "Frameworks/Libraries",
        technologies: ["Node.js", "React.js", "Flutter", "Next.js", "Tailwind CSS"]
    },
    "Databases": {
        title: "Databases",
        technologies: ["MySQL", "MongoDB"]
    },
    "Tools/Technologies": {
        title: "Tools/Technologies",
        technologies: ["Git", "Github", "Spline", "AWS Bedrock", "Google Gemini API", "Figma", "Github Copilot"]
    }
};

const TechStack: React.FC = () => {
    return (
        <section id="skills" className="py-24 lg:py-32 ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary">
                    Skills & Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 max-w-[980px] mx-auto">
                    {Object.entries(techCategories).map(([key, { title, technologies }], index) => (
                        <div key={key} className="overflow-hidden  p-6">
                            <h3 className="text-primary text-xl font-semibold mb-4">{title}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {technologies.map((name) => (
                                    <div
                                        key={name}
                                        className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-200 hover:bg-primary/10 transition-colors"
                                    >
                                        <div className="relative h-8 w-8 mb-2">
                                            <img
                                                src={techIcons[name]}
                                                alt={`${name} icon`}
                                                className="object-contain h-full w-full"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center text-muted-foreground">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
