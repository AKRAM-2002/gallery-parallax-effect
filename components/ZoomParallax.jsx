import styles from './ZoomParallax.module.scss';

import Picture1 from '../public/images/14.jpeg';
import Picture2 from '../public/images/8.jpeg';
import Picture3 from '../public/images/18.jpeg';
import Picture4 from '../public/images/15.jpeg';
import Picture5 from '../public/images/24.jpeg';


import Image from 'next/image';

import { useScroll, useTransform, motion} from 'framer-motion';

import { useRef } from 'react';

const ZoomParallax = () => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ['start start', 'end end']

    })



    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture2,
            scale: scale
        },
        {
            src: Picture1,
            scale: scale5
        },
        {
            src: Picture4,
            scale: scale6
        },
        {
            src: Picture5,
            scale: scale8
        },
        {
            src: Picture3,
            scale: scale9
        },
        
    ]


  return (
    <div ref={container} className={styles.container}>

        <div className={styles.sticky}>

            {

                pictures.map( ({src, scale}, index) => {

                    return <motion.div key={index} style={{scale}} className={styles.el}>

                        <div className={styles.imageContainer}>

                            <Image

                                src={src}

                                fill

                                alt="image"

                                placeholder='blur'

                            />

                        </div>

                    </motion.div>

                })

            }

        </div>

    </div>
  )
}
export default ZoomParallax