'use client'

import { motion } from 'framer-motion'

export function GradientBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-60"
                style={{
                    background: 'radial-gradient(circle, oklch(0.95 0.15 95) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute top-1/4 right-0 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-50"
                style={{
                    background: 'radial-gradient(circle, oklch(0.92 0.14 110) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-0 left-1/3 w-[900px] h-[900px] rounded-full blur-3xl opacity-40"
                style={{
                    background: 'radial-gradient(circle, oklch(0.85 0.12 75) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 80, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/40"
            />
        </div>
    )
}
