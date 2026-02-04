'use client'

import React from "react"

import { motion, useScroll, useTransform, useSpring, useInView, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: string
  color: string
  details: string
}

interface ProcessTimelineProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

const MagneticCard = ({ 
  children, 
  index, 
  isInView 
}: { 
  children: React.ReactNode
  index: number
  isInView: boolean
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 })
  const scale = useSpring(1, { stiffness: 300, damping: 30 })

  const transform = useMotionTemplate`
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    scale(${scale})
  `

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    scale.set(1.05)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }

  // Entrance animations from different directions
  const entranceDirections = [
    { x: -200, y: -100, rotate: -15 },  // Top-left
    { x: 200, y: -50, rotate: 10 },     // Top-right
    { x: -150, y: 100, rotate: 12 },    // Bottom-left
    { x: 180, y: 80, rotate: -8 },      // Bottom-right
    { x: 0, y: 150, rotate: 5 }         // Bottom-center
  ]

  const direction = entranceDirections[index % entranceDirections.length]

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{ transform }}
      initial={{
        x: direction.x,
        y: direction.y,
        rotate: direction.rotate,
        opacity: 0,
        scale: 0.8
      }}
      animate={isInView ? {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1
      } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for background layers
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Grid sizes for irregular layout
  const cardSizes = [
    "col-span-full lg:col-span-2", // Large card
    "col-span-full sm:col-span-1 lg:col-span-1", // Medium card
    "col-span-full sm:col-span-2 lg:col-span-1", // Small card
    "col-span-full sm:col-span-1 lg:col-span-2", // Wide card
    "col-span-full lg:col-span-1" // Standard card
  ]

  const cardHeights = [
    "min-h-[400px]", // Tall
    "min-h-[350px]", // Medium
    "min-h-[320px]", // Compact
    "min-h-[380px]", // Large
    "min-h-[360px]"  // Standard
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at 20% 30%, rgba(232, 137, 6, 0.15), rgba(203, 174, 165, 0.2), rgba(242, 234, 229, 0.25)),
              radial-gradient(circle at 80% 20%, rgba(232, 137, 6, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(203, 174, 165, 0.15) 0%, transparent 60%),
              linear-gradient(135deg, rgba(242, 234, 229, 0.1), rgba(232, 137, 6, 0.05))
            `,
            filter: 'blur(1px)'
          }}
          animate={{
            background: [
              `conic-gradient(from 0deg at 20% 30%, rgba(232, 137, 6, 0.15), rgba(203, 174, 165, 0.2), rgba(242, 234, 229, 0.25))`,
              `conic-gradient(from 60deg at 30% 70%, rgba(203, 174, 165, 0.2), rgba(242, 234, 229, 0.25), rgba(232, 137, 6, 0.15))`,
              `conic-gradient(from 120deg at 70% 30%, rgba(242, 234, 229, 0.25), rgba(232, 137, 6, 0.15), rgba(203, 174, 165, 0.2))`,
              `conic-gradient(from 0deg at 20% 30%, rgba(232, 137, 6, 0.15), rgba(203, 174, 165, 0.2), rgba(242, 234, 229, 0.25))`
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        >
          <div 
            className="w-full h-full rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(232, 137, 6, 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: y2, rotate }}
          className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full"
        >
          <div 
            className="w-full h-full rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(203, 174, 165, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full"
        >
          <div 
            className="w-full h-full rounded-full opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(242, 234, 229, 0.5) 0%, transparent 70%)',
              filter: 'blur(50px)'
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with 3D Title Effect */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div 
              className="inline-block p-8 lg:p-12 rounded-3xl backdrop-blur-xl"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    rgba(255, 255, 255, 0.1) 100%
                  )
                `,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 25px 50px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-black mb-4 lg:mb-6 tracking-tight">
                {title}
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Irregular CSS Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto">
          {steps.map((step, index) => (
            <MagneticCard key={step.id} index={index} isInView={isInView}>
              <div 
                className={`${cardSizes[index]} ${cardHeights[index]} p-6 lg:p-8 rounded-3xl relative overflow-hidden group`}
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.25) 0%, 
                      rgba(255, 255, 255, 0.05) 100%
                    )
                  `,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.1),
                    0 8px 16px rgba(0, 0, 0, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                  `
                }}
              >
                
                {/* Animated Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%, 
                        rgba(232, 137, 6, 0.1) 0%, 
                        transparent 70%
                      )
                    `
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  
                  {/* Icon Container - Prepared for Lottie */}
                  <motion.div 
                    className="mb-6 lg:mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="relative">
                      <div 
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl text-white relative overflow-hidden"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(232, 137, 6, 0.8) 0%, 
                              rgba(203, 174, 165, 0.6) 100%
                            )
                          `,
                          boxShadow: `
                            0 10px 20px rgba(232, 137, 6, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.3)
                          `
                        }}
                      >
                        {/* Current emoji - ready to replace with Lottie */}
                        <span className="relative z-10 filter drop-shadow-lg">
                          {step.icon}
                        </span>
                        
                        {/* Lottie container - hidden for now */}
                        <div className="absolute inset-0 hidden" id={`lottie-${step.id}`} />
                      </div>
                      
                      {/* Step Number Badge */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-brand-primary"
                        style={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(232, 137, 6, 0.3)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {step.id}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-brand-black mb-4 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 lg:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {step.details.split(' • ').slice(0, 3).map((detail, i) => (
                      <motion.span 
                        key={i}
                        className="text-xs lg:text-sm text-brand-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-medium"
                        style={{
                          background: 'rgba(242, 234, 229, 0.7)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.4)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(232, 137, 6, 0.1)'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>

      {/* Custom CSS for enhanced effects */}
      <style jsx>{`
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
        }
        
        @media (hover: hover) {
          .group:hover {
            transform: translateZ(0);
          }
        }

        /* Touch optimization for mobile */
        @media (hover: none) {
          .group:active {
            transform: scale(0.98);
          }
        }

        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px) saturate(180%);
          }
        }
      `}</style>
    </div>
  )
}
