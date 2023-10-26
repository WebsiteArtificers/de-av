"use client"
import './hero.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__subcontainer'>
                <motion.h2 animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__subheader'>Supercharge</motion.h2>
                <motion.h1 transition={{ delay: .5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__header'>
                    audio and visual performance
                </motion.h1>
                <motion.p transition={{ delay: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__paragraph'>We provide <motion.span>cutting-edge</motion.span> and <motion.span>scalable</motion.span> technologies for all things audio and visual. Let <motion.span>Delaware Audio Visual</motion.span> be your audio and visual solution.</motion.p>
                <div className='hero__button--container'>
                    <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__quinary left__button'>Contact Sales</motion.button>
                    <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__quaternary right__button'>Our Expertise</motion.button>
                </div>
            </div>
        </div>
    )
}