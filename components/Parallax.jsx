'use client';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useTransform, useScroll, motion } from 'framer-motion';
import styles from './Parallax.module.scss'
import Lenis from '@studio-freight/lenis'


const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
  "25.jpeg",
  "26.jpeg",
  "27.jpeg",
  "28.jpeg",
  "29.jpeg",
  "30.jpeg",
  "31.jpeg",
  "32.jpeg",
  "33.jpeg",
  "34.jpeg",
  "35.jpeg"
];


export default function Parallax() {

  const gallery = useRef(null);

  const [dimension, setDimension] = useState({width:0, height:0});


  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
})

const { height } = dimension;
  

const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.3])
const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.25])
const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {

    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const resize = () => {

      setDimension({width: window.innerWidth, height: window.innerHeight})

    }


    window.addEventListener("resize", resize)

    requestAnimationFrame(raf);

    resize();
    return () => {

      window.removeEventListener("resize", resize);

    }

  }, [])


  return (

    <main className={styles.main}>

      <div className={styles.spacer}></div>

      <div className={styles.gallery}>

      <div className={`${styles.galleryWrapper} w-full  grid grid-cols-5 gap-8`}>

          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={2}/>
          <Column images={[images[6], images[7], images[8]]} y={3}/>
          <Column images={[ images[9], images[20], images[11]]} y={y4}/>
          <Column images={[images[18], images[23], images[32]]} y={y}/>
          
        </div>

      </div>
      

      <div className={styles.spacer}></div>

    </main>

  )
}

const Column = ({images, y}) => {

  return (

    <motion.div 

      className={styles.column}
      style={{y}}
      >

      {

        images.map( (src, i) => {

          return <div key={i} className={styles.imageContainer}>

            <Image 

              src={`/images/${src}`}

              alt='image'

              fill

            />

          </div>

        })

      }

    </motion.div>

  )

}
