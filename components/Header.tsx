'use client'

import { Button } from '@/components/ui/button'
import { Sun } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Header() {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-40 pt-8 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <nav className="flex items-center justify-center">
                    <div className="flex items-center gap-6 bg-card/95 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-white/10">
                        <button className="flex items-center gap-2 text-card-foreground hover:text-primary transition-colors">
                            <Sun size={20} weight="fill" />
                        </button>

                        <div className="h-6 w-px bg-white/20" />

                        <a
                            href="#work"
                            className="text-card-foreground hover:text-primary transition-colors text-sm font-medium"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="text-card-foreground hover:text-primary transition-colors text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#connect"
                            className="text-card-foreground hover:text-primary transition-colors text-sm font-medium"
                        >
                            Connect
                        </a>

                        <div className="h-6 w-px bg-white/20" />

                        <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6"
                            size="sm"
                        >
                            Start project
                        </Button>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}
