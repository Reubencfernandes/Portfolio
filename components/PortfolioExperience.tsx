'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, Html } from '@react-three/drei'
import { EffectComposer, Vignette, HueSaturation, BrightnessContrast, Bloom } from '@react-three/postprocessing'
import { damp3, damp } from 'maath/easing'
import * as THREE from 'three'

// --- GEOMETRY COMPONENTS ---

const Desk = (props: React.ComponentProps<'group'>) => {
    return (
        <group {...props}>
            {/* Desk Surface */}
            <mesh position={[0, -0.5, 0]} receiveShadow castShadow>
                <boxGeometry args={[5, 0.1, 2.5]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.5} />
            </mesh>

            {/* Monitor Stand */}
            <mesh position={[0, -0.2, -0.6]} castShadow>
                <boxGeometry args={[0.3, 0.6, 0.2]} />
                <meshStandardMaterial color="#2d2d2d" />
            </mesh>

            {/* Monitor Screen Frame */}
            <group position={[0, 0.3, -0.6]}>
                <mesh castShadow>
                    <boxGeometry args={[2.1, 1.25, 0.1]} />
                    <meshStandardMaterial color="#111" roughness={0.2} />
                </mesh>
                {/* The Screen Itself - Dimensions matched to 16:9 aspect roughly */}
                <mesh position={[0, 0, 0.055]}>
                    <planeGeometry args={[2, 1.15]} />
                    {/* Black screen initially, content overlay via Html */}
                    <meshBasicMaterial color="#000" />
                </mesh>
            </group>

            {/* Mechanical Keyboard */}
            <group position={[0, -0.42, 0.4]} rotation={[-0.1, 0, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[1.4, 0.05, 0.5]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                {/* Mock Keys */}
                <mesh position={[0, 0.04, 0]}>
                    <boxGeometry args={[1.3, 0.02, 0.4]} />
                    <meshStandardMaterial color="#555" />
                </mesh>
            </group>

            {/* Mouse Pad */}
            <mesh position={[1, -0.445, 0.4]} rotation={[-0.1, 0, 0]}>
                <planeGeometry args={[0.8, 0.7]} />
                <meshStandardMaterial color="#222" />
            </mesh>

            {/* Mouse */}
            <mesh position={[1, -0.4, 0.4]} castShadow>
                <capsuleGeometry args={[0.08, 0.15, 4, 8]} />
                <meshStandardMaterial color="#eee" />
            </mesh>

            {/* Lamp */}
            <group position={[-1.8, -0.4, -0.5]} rotation={[0, 0.5, 0]}>
                <mesh castShadow>
                    <cylinderGeometry args={[0.15, 0.2, 0.1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                <mesh position={[0, 0.4, 0]} castShadow>
                    <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                <mesh position={[0.2, 0.8, 0]} rotation={[0, 0, -0.5]}>
                    <coneGeometry args={[0.2, 0.4, 32, 1, true]} />
                    <meshStandardMaterial color="#222" side={THREE.DoubleSide} />
                </mesh>
                {/* Bulb */}
                <mesh position={[0.2, 0.8, 0]}>
                    <sphereGeometry args={[0.08]} />
                    <meshBasicMaterial color="#ffaa00" toneMapped={false} />
                </mesh>
            </group>
        </group>
    )
}

// --- LOGIC COMPONENTS ---

const SceneContent = () => {
    const scroll = useScroll()
    const { camera } = useThree()
    const profileRef = useRef<THREE.Group>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saturationRef = useRef<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bloomRef = useRef<any>(null)

    useFrame((state, delta) => {
        const offset = scroll.offset

        // --- CAMERA ANIMATION ---

        const targetPos = new THREE.Vector3(0, 1.5, 5.5) // Phase 1: High Angle Wide Shot
        const targetLookAt = new THREE.Vector3(0, 0, 0)   // Looking at desk center

        if (offset > 0.1) {
            // Phase 2: Approach (The Awakening)
            // Move down and closer
            const p = THREE.MathUtils.smoothstep(offset, 0.1, 0.8)
            const midPos = new THREE.Vector3(0, 0.6, 2.5)
            targetPos.lerp(midPos, p)

            // Look slightly higher towards monitor
            targetLookAt.lerp(new THREE.Vector3(0, 0.3, -0.6), p)
        }

        if (offset > 0.8) {
            // Phase 3: Deep Dive (Lock to Screen)
            const p = (offset - 0.8) * 5 // Rapid transition 0.8 -> 1.0
            // Monitor is at [0, 0.3, -0.6]. 
            // We want to fill screen.
            // Screen width ~2. Camera FOV 35.
            // Distance needed: ~3.2 units away? No, closer.
            // At z=0.5 (1.1m away from screen at -0.6)
            const finalPos = new THREE.Vector3(0, 0.3, 0.5)
            targetPos.lerp(finalPos, p)
        }

        damp3(camera.position, targetPos, 0.4, delta)

        // Manual LookAt Damping
        // We create a temp vector for current look direction + position to get "current target"
        // But simpler is to damp the quaternion? Or just lookAt every frame.
        // For smoothness, let's just use state.camera.lookAt(targetLookAt)
        // Ideally we'd smooth the lookAt target but strict lookAt is often fine if position is smooth.
        state.camera.lookAt(targetLookAt)


        // --- POST PROCESSING (Effect Control) ---

        // Saturation: -1 (B&W) -> 0 (Normal) -> 0.2 (Vibrant)
        // Transition starts at 0.2, ends at 0.6
        if (saturationRef.current) {
            const satP = THREE.MathUtils.smoothstep(offset, 0.2, 0.6)
            const targetSat = -1 + (satP * 1.2) // Ends at 0.2 (slightly boosted)
            damp(saturationRef.current, 'saturation', targetSat, 0.2, delta)
        }

        // Bloom: Low in B&W, higher in color
        if (bloomRef.current) {
            const bloomP = THREE.MathUtils.smoothstep(offset, 0.2, 0.6)
            const targetInt = 0.5 + (bloomP * 1.0)
            damp(bloomRef.current, 'intensity', targetInt, 0.2, delta)
        }

        // --- ELEMENTS VISIBILITY ---

        // Profile Card: Appears 0.3 -> 0.7
        if (profileRef.current) {
            let s = 0
            if (offset > 0.25 && offset < 0.75) {
                // Fade in/out logic
                if (offset < 0.35) s = (offset - 0.25) * 10
                else if (offset > 0.65) s = (0.75 - offset) * 10
                else s = 1
            }
            damp3(profileRef.current.scale, [s, s, s], 0.2, delta)
        }
    })

    return (
        <>
            <Desk />

            {/* FLOATING PROFILE CARD */}
            <group position={[2, 0.5, 0]} rotation={[0, -0.4, 0]} ref={profileRef} scale={[0, 0, 0]}>
                <Html transform position={[0, 0, 0]} className="select-none pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-[350px] text-white shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                                    <div className="w-full h-full bg-cyan-900 flex items-center justify-center text-2xl">👨‍💻</div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Reuben Fernandes</h3>
                                <p className="text-sm text-gray-400">Full Stack Engineer</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Passionate about building interactive 3D web experiences using modern technologies.
                            Merging creativity with logic.
                        </p>
                    </div>
                </Html>
            </group>

            {/* MONITOR SCREEN INTERFACE (Final Phase) */}
            {/* Located at Monitor Z: -0.6. Screen slightly forward. */}
            <group position={[0, 0.3, -0.54]}>
                <Html
                    transform
                    occlude="blending"
                    position={[0, 0, 0]}
                    style={{ width: '960px', height: '540px', background: '#000' }}
                    scale={0.208} // Precise scaling to fit 2.0 unit width
                >
                    <MonitorInterface />
                </Html>
            </group>

            {/* SCROLL HTML OVERLAY (Intro Title) */}
            <Scroll html style={{ width: '100vw', height: '100vh' }}>
                <TitleSection />
            </Scroll>

            {/* EFFECTS */}
            <EffectComposer>
                <HueSaturation ref={saturationRef} saturation={-1} />
                <BrightnessContrast contrast={0.1} brightness={0} />
                <Vignette eskil={false} offset={0.1} darkness={1.0} />
                <Bloom ref={bloomRef} luminanceThreshold={0.5} mipmapBlur intensity={0.5} radius={0.6} />
            </EffectComposer>
        </>
    )
}

const TitleSection = () => {
    const scroll = useScroll()
    const [opacity, setOpacity] = useState(1)

    useFrame(() => {
        setOpacity(Math.max(0, 1 - scroll.range(0, 0.2) / 0.2))
    })

    return (
        <div style={{ opacity }} className="w-full h-full flex flex-col items-center justify-center pointer-events-none">
            <h1 className="text-9xl font-black text-white tracking-tighter mix-blend-difference" style={{ fontFamily: 'Inter' }}>
                REUBEN
            </h1>
            <h2 className="text-4xl text-gray-400 tracking-[0.5em] mt-4 uppercase font-light">
                Fernandes
            </h2>
        </div>
    )
}

const MonitorInterface = () => {
    // A simple interactive OS
    return (
        <div className="w-full h-full bg-slate-900 flex flex-col font-mono text-white select-none">
            <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-gray-500">reuben-os — v1.0.0</span>
            </div>

            <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                {/* Left: Menu */}
                <div className="space-y-4">
                    <div className="text-green-400 mb-6 text-xl">
                        $ ./welcome.sh
                    </div>
                    <div className="space-y-2">
                        <div className="p-4 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer border border-transparent hover:border-cyan-500/50 transition-all group flex items-center gap-4">
                            <span className="text-2xl">🤖</span>
                            <div>
                                <div className="font-bold group-hover:text-cyan-400">Konkani LLM</div>
                                <div className="text-xs text-gray-500">AI Language Model</div>
                            </div>
                        </div>
                        <div className="p-4 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer border border-transparent hover:border-purple-500/50 transition-all group flex items-center gap-4">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <div className="font-bold group-hover:text-purple-400">Reuben OS</div>
                                <div className="text-xs text-gray-500">System Architecture</div>
                            </div>
                        </div>
                        <div className="p-4 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer border border-transparent hover:border-orange-500/50 transition-all group flex items-center gap-4">
                            <span className="text-2xl">🍁</span>
                            <div>
                                <div className="font-bold group-hover:text-orange-400">Maple App</div>
                                <div className="text-xs text-gray-500">Mobile Development</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Output/Chat */}
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-hidden flex flex-col">
                    <div className="flex-1 text-gray-400 space-y-1">
                        <p>Loading modules...</p>
                        <p className="text-green-500">✓ Graphics Engine Initialized</p>
                        <p className="text-green-500">✓ User Connected</p>
                        <p>Waiting for command...</p>
                    </div>
                    <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
                        <span className="text-cyan-500">➜</span>
                        <input className="bg-transparent outline-none flex-1 text-white" placeholder="Type a message..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PortfolioExperience() {
    return (
        <div className="w-full h-full bg-black">
            <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 35 }}>
                <fog attach="fog" args={['#050505', 5, 15]} />
                <ambientLight intensity={0.5} />

                {/* Main Spot for Desk */}
                <spotLight
                    position={[5, 8, 5]}
                    angle={0.4}
                    penumbra={0.5}
                    intensity={30}
                    castShadow
                    shadow-bias={-0.0001}
                />

                {/* Neon Accents (initially desaturated by postproc) */}
                <pointLight position={[-3, 2, 0]} intensity={20} color="#a855f7" distance={8} />
                <pointLight position={[3, 2, 0]} intensity={20} color="#06b6d4" distance={8} />

                <ScrollControls pages={4} damping={0.2}>
                    <SceneContent />
                </ScrollControls>
            </Canvas>
        </div>
    )
}
