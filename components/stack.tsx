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
    "AWS Bedrock": "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2023/09/21/ML-11694-1.jpg",
    "Google Gemini API": "https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png",
    "Spline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqrQL0Bt8VyVDUaFV_OVVwZQGYXv9xGc_RQ&usqp=CAU",
    "Github Copilot": "https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.138.0/1701196307640/Microsoft.VisualStudio.Services.Icons.Default"
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
        <section id="skills" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary">
                    Skills & Tools
                </h2>
                <div className="grid gap-6 md:grid-cols-2 max-w-[980px] mx-auto">
                    {Object.entries(techCategories).map(([key, { title, technologies }], index) => (
                        <div key={key} className="overflow-hidden bg-secondary/10 border-secondary/30 rounded-lg p-6">
                            <h3 className="text-primary text-xl font-semibold mb-4">{title}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {technologies.map((name) => (
                                    <div
                                        key={name}
                                        className="flex flex-col items-center justify-center p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
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
