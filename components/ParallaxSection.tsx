'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
    children: ReactNode
    speed?: number
    className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const ctx = gsap.context(() => {
            gsap.to(section, {
                y: () => -100 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            })
        }, section)

        return () => ctx.revert()
    }, [speed])

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    )
}
