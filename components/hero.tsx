'use client';
import {Meteors} from "../components/ui/meteors";
import { LineShadowText } from "../components/ui/line-shadow-text";
import {Dock, DockIcon} from '../components/ui/dock';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';


export default function Hero() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Meteors number={40} />
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <LineShadowText className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl" shadowColor={'black'}>
                        Reuben
                    </LineShadowText>
                    <h1 className="text-2xl font-semibold">Full stack developer</h1>
                    <Dock iconMagnification={60} iconDistance={100}>
                        <DockIcon className="bg-black/10 dark:bg-white/10">
                            <FaGithub className="size-full" />
                        </DockIcon>
                        <DockIcon className="bg-black/10 dark:bg-white/10">
                            <FaLinkedin className="size-full" />
                        </DockIcon>
                        <DockIcon className="bg-black/10 dark:bg-white/10">
                            <FaDiscord className="size-full" />
                        </DockIcon>
                    </Dock>
                </div>
            </div>
        </div>
    );
}