'use client'
import './globals.css'
import Parallax from '../components/Parallax'
import HeadSection from '../components/HeadSection'
import PhotographyPortfolio from '../components/PhotographyPortfolio'
import { useEffect } from 'react'
import ZoomParallax from '../components/ZoomParallax'


export default function Home() {


  
 



  return (

    <>
      <HeadSection/>
      <PhotographyPortfolio/>
      <ZoomParallax/>
      <Parallax/>
    </>

    )
}