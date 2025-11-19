'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { GradientBackground } from '@/components/GradientBackground'
import { CursorFollower } from '@/components/CursorFollower'
import { GlassGlitchImage } from '@/components/GlassGlitchImage'
import { ParallaxSection } from '@/components/ParallaxSection'
import { CHARACTER_IMAGES, PROFILE_IMAGE_PRIMARY, PROFILE_IMAGE_SECONDARY } from '@/lib/placeholder'

export default function App() {
  const [cursorVisible, setCursorVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState<string | null>(null)

  const firstName = "REUBEN "
  const lastName = "FERNANDES"

  const handleCharacterHover = (char: string) => {
    const upperChar = char.toUpperCase() as keyof typeof CHARACTER_IMAGES
    if (CHARACTER_IMAGES[upperChar]) {
      setCurrentImage(CHARACTER_IMAGES[upperChar])
      setCursorVisible(true)
    }
  }

  const handleCharacterLeave = () => {
    setCursorVisible(false)
    setCurrentImage(null)
  }

  return (
    <div className="min-h-screen relative">
      <GradientBackground />
      <CursorFollower isVisible={cursorVisible} imageSrc={currentImage} />
      <Header />

      <main className="relative">
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto w-full">
            <ParallaxSection speed={0.2}>
              <motion.div
                className="space-y-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary leading-relaxed">
                  Howdy! Meet your trusted design partner,
                </h2>
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary leading-relaxed">
                  crafting strong{' '}
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-lg font-bold">
                    brands
                  </span>{' '}
                  for SaaS and Web3.
                </h2>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.4}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1
                  className="text-[clamp(4rem,12vw,14rem)] font-black leading-none tracking-tighter text-foreground select-none"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                  }}
                >
                  {firstName.split('').map((char, idx) => (
                    <span
                      key={`first-${idx}`}
                      className="inline-block transition-colors hover:text-primary cursor-pointer"
                      onMouseEnter={() => handleCharacterHover(char)}
                      onMouseLeave={handleCharacterLeave}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                  <br />
                  {lastName.split('').map((char, idx) => (
                    <span
                      key={`last-${idx}`}
                      className="inline-block transition-colors hover:text-primary cursor-pointer"
                      onMouseEnter={() => handleCharacterHover(char)}
                      onMouseLeave={handleCharacterLeave}
                    >
                      {char}
                    </span>
                  ))}
                </h1>

                <motion.div
                  className="absolute -bottom-4 left-0 h-2 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </ParallaxSection>
          </div>
        </section>

        <section id="work" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
          <motion.div
            className="max-w-[1400px] mx-auto w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ParallaxSection speed={0.2}>
                <motion.div
                  className="bg-[#F5F3ED] rounded-[2.5rem] overflow-hidden shadow-2xl p-8 lg:p-12 flex flex-col items-center justify-center aspect-[4/5] relative group cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-2/3 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-[280px] h-[320px]">
                        <motion.div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[100px] bg-white rounded-lg shadow-lg transform rotate-[-15deg] z-10 border-8 border-white flex items-center justify-center"
                          initial={{ y: -20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-purple-200 via-blue-300 to-purple-400 rounded"></div>
                        </motion.div>

                        <motion.div
                          className="absolute top-[60px] left-[20px] w-[160px] h-[120px] bg-white rounded-lg shadow-lg transform rotate-[-8deg] z-20 border-8 border-white overflow-hidden"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                            <div className="w-20 h-16 bg-white/90 rounded"></div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute bottom-0 right-0 w-[180px] h-[140px] perspective-1000"
                          initial={{ x: 30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="relative w-full h-full transform rotate-y-[20deg]">
                            <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white overflow-hidden">
                              <div className="w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                              </div>
                              <div className="p-2 space-y-1">
                                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full z-0"
                          animate={{
                            background: [
                              'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(251,146,60,0.2) 50%, rgba(168,85,247,0.3) 100%)',
                              'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(251,191,36,0.2) 50%, rgba(251,146,60,0.3) 100%)',
                              'radial-gradient(circle, rgba(251,146,60,0.3) 0%, rgba(168,85,247,0.2) 50%, rgba(251,191,36,0.3) 100%)',
                            ],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-foreground flex items-center justify-center gap-3">
                      Stimulate
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Branding, Web design, Illustrations, Development
                    </p>
                  </div>
                </motion.div>
              </ParallaxSection>

              <div className="space-y-12 lg:space-y-16">
                <ParallaxSection speed={0.25}>
                  <motion.div
                    className="bg-card rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                      <div className="absolute inset-8 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 p-6 flex flex-col">
                          <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
                              <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-foreground">$2.5k</div>
                              </div>
                            </div>
                            <div className="bg-emerald-700 rounded-xl shadow-lg p-4 flex flex-col justify-between">
                              <div className="space-y-2">
                                <div className="h-3 bg-white/30 rounded w-3/4"></div>
                                <div className="h-2 bg-white/20 rounded w-1/2"></div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-white">$2.0k</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-4">
                              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                            </div>
                            <div className="bg-yellow-50 rounded-xl shadow-lg p-4 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-semibold text-foreground">Clean code</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 bg-card">
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-3 mb-2">
                        Ruby
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Branding, Web design, Development
                      </p>
                    </div>
                  </motion.div>
                </ParallaxSection>

                <ParallaxSection speed={0.3}>
                  <motion.div
                    className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/9] relative group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                      <div className="w-full h-full" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.3) 2px, rgba(99, 102, 241, 0.3) 4px),
                                        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 92, 246, 0.3) 2px, rgba(139, 92, 246, 0.3) 4px)`
                      }}></div>
                    </div>
                    <div className="relative h-full flex items-center justify-center p-8 lg:p-12">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                          <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl"></div>
                        </div>
                        <h3 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
                          caldera
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxSection>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
          <motion.div
            className="max-w-[1200px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ParallaxSection speed={0.3}>
              <h2 className="text-5xl md:text-7xl font-bold text-secondary mb-12">
                About Me
              </h2>
            </ParallaxSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ParallaxSection speed={0.2}>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    I'm Reuben Fernandes, a creative designer passionate about crafting
                    exceptional digital experiences that blend aesthetics with functionality.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    With expertise in branding, UI/UX design, and visual storytelling,
                    I help businesses transform their vision into compelling digital realities.
                    My approach combines strategic thinking with meticulous attention to detail.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    When I'm not designing, you'll find me exploring the latest design trends,
                    experimenting with new tools, and seeking inspiration from art and nature.
                  </p>
                </motion.div>
              </ParallaxSection>

              <ParallaxSection speed={0.4}>
                <motion.div
                  className="relative aspect-[3/4] max-w-md mx-auto"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <GlassGlitchImage
                    primaryImage={PROFILE_IMAGE_PRIMARY}
                    secondaryImage={PROFILE_IMAGE_SECONDARY}
                    alt="Reuben Fernandes"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-xl z-10">
                    <p className="font-bold text-sm">Hover to reveal ✨</p>
                  </div>
                </motion.div>
              </ParallaxSection>
            </div>
          </motion.div>
        </section>

        <section id="connect" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
          <ParallaxSection speed={0.3}>
            <motion.div
              className="max-w-[1400px] mx-auto w-full text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary mb-12">
                Let's Create Something Amazing
              </h2>
              <motion.button
                className="bg-primary text-primary-foreground px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </ParallaxSection>
        </section>
      </main>

      <footer className="relative px-6 lg:px-12 py-12 border-t border-border/50">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground">
            © 2024 Reuben Fernandes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
