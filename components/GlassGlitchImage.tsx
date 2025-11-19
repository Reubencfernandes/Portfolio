'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlassGlitchImageProps {
    primaryImage: string
    secondaryImage: string
    alt: string
}

export function GlassGlitchImage({ primaryImage, secondaryImage, alt }: GlassGlitchImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [glitchPosition, setGlitchPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [glitchSize, setGlitchSize] = useState(120)

    useEffect(() => {
        if (!isHovering) return

        const container = containerRef.current
        if (!container) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            setGlitchPosition({ x, y })
        }

        container.addEventListener('mousemove', handleMouseMove)
        return () => container.removeEventListener('mousemove', handleMouseMove)
    }, [isHovering])

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden rounded-3xl cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="absolute inset-0">
                <img
                    src={primaryImage}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>

            {isHovering && (
                <>
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            clipPath: `circle(${glitchSize}px at ${glitchPosition.x}px ${glitchPosition.y}px)`,
                        }}
                    >
                        <img
                            src={secondaryImage}
                            alt={`${alt} alternate`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 pointer-events-none mix-blend-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        style={{
                            clipPath: `circle(${glitchSize}px at ${glitchPosition.x}px ${glitchPosition.y}px)`,
                        }}
                    >
                        <div
                            className="w-full h-full bg-gradient-to-br from-primary/40 via-transparent to-accent/40"
                            style={{
                                filter: 'blur(8px)',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute rounded-full border-4 border-primary/60 shadow-2xl pointer-events-none"
                        style={{
                            left: glitchPosition.x - glitchSize,
                            top: glitchPosition.y - glitchSize,
                            width: glitchSize * 2,
                            height: glitchSize * 2,
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="w-full h-full rounded-full bg-primary/10 backdrop-blur-sm" />
                    </motion.div>

                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent pointer-events-none"
                            style={{
                                top: `${glitchPosition.y + (i - 1) * 15}px`,
                                left: 0,
                            }}
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1, 0] }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.05,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                            }}
                        />
                    ))}

                    {[...Array(2)].map((_, i) => (
                        <motion.div
                            key={`v-${i}`}
                            className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-accent/80 to-transparent pointer-events-none"
                            style={{
                                left: `${glitchPosition.x + (i - 0.5) * 20}px`,
                                top: 0,
                            }}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: [0, 0.6, 0], scaleY: [0, 1, 0] }}
                            transition={{
                                duration: 0.4,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 0.6,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
