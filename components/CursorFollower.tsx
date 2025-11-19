'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CursorFollowerProps {
    isVisible: boolean
    imageSrc: string | null
}

export function CursorFollower({ isVisible, imageSrc }: CursorFollowerProps) {
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }, [])

    useEffect(() => {
        if (isTouchDevice) return

        const updateCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        window.addEventListener('mousemove', updateCursor)
        return () => window.removeEventListener('mousemove', updateCursor)
    }, [cursorX, cursorY, isTouchDevice])

    if (isTouchDevice) return null

    return (
        <motion.div
            className="fixed pointer-events-none z-50 mix-blend-normal"
            style={{
                left: cursorXSpring,
                top: cursorYSpring,
                x: '-50%',
                y: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isVisible && imageSrc ? 1 : 0,
                scale: isVisible && imageSrc ? 1 : 0.8,
            }}
            transition={{
                opacity: { duration: 0.2 },
                scale: { duration: 0.3, type: 'spring', damping: 20 },
            }}
        >
            {imageSrc && (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90">
                    <img
                        src={imageSrc}
                        alt="Cursor preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </motion.div>
    )
}
