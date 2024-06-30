'use client'
import './globals.css'
import Parallax from '../components/Parallax'
import HeadSection from '../components/HeadSection'
import PhotographyPortfolio from '../components/PhotographyPortfolio'

import ZoomParallax from '../components/ZoomParallax'
import { MacbookScrollDemo } from '@/components/MacbookScroll'
import { TextEffect } from '@/components/TextEffect'


export default function Home() {


  return (

    <>
      <HeadSection/>
      <PhotographyPortfolio/>
      <MacbookScrollDemo/>
      <ZoomParallax/>
      <TextEffect/>
      <Parallax/>
    </>

    )
}