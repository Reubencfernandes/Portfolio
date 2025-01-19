'use client';
import {Meteors} from "../components/ui/meteors";
import { AuroraText } from "../components/ui/aurora-text";
import {Dock, DockIcon} from '../components/ui/dock';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-4">
                <Meteors number={40} />
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center max-w-[90vw]">
                        <div className="text-center">
                            <h1 className="text-balance text-3xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Hello, I'm&nbsp; <AuroraText>Reuben Fernandes</AuroraText>
                               
                            </h1>
                        </div>
                        <h2 className="text-xl sm:text-2xl text-gray-500 font-normal mt-2">Full-Stack Developer</h2>
                        <div className="mt-6">
                            <Dock iconMagnification={60} iconDistance={50} className="scale-75 sm:scale-100">
                                <DockIcon 
                                    className="bg-black/10 dark:bg-white/10 cursor-pointer"
                                    onClick={() => handleClick('https://github.com/Reubencfernandes')}
                                >
                                    <FaGithub className="size-full" />
                                </DockIcon>
                                <DockIcon 
                                    className="bg-black/10 dark:bg-white/10 cursor-pointer"
                                    onClick={() => handleClick('https://www.linkedin.com/in/reuben-chagas-fernandes/')}
                                >
                                    <FaLinkedin className="size-full" />
                                </DockIcon>
                                <DockIcon 
                                    className="bg-black/10 dark:bg-white/10 cursor-pointer"
                                    onClick={() => handleClick('https://discord.gg/v2TzrDz5Kz')}
                                >
                                    <FaDiscord className="size-full" />
                                </DockIcon>
                                <DockIcon 
                                    className="bg-black/10 dark:bg-white/10 cursor-pointer"
                                    onClick={() => handleClick('mailto:18reuchagasfernandes@gmail.com')}
                                >
                                    <FaEnvelope className="size-full" />
                                </DockIcon>
                            </Dock>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
