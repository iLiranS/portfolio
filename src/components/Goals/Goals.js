import styles from './Goals.module.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import {AiOutlineCheckCircle , AiOutlineProfile} from 'react-icons/ai'
const Goals = props => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
              });


    return(
    <div  className={styles.mainContainer}>
        <h2>Goals</h2>
        <section className={styles.goalsInfo}>
        <p>As in everything in life , its important to get better as time goes by , hence we need goals and expectations</p>
        </section>
        <div className={styles.svgContainer}>

        <AiOutlineProfile className={`${inView ? styles.active : ''} ${styles.bigSvg}`}/>

        <section ref={ref}   className={`${inView ? styles.active : ''} ${styles.textSection}`}>
            <p>2020</p>
            <p>2021</p>
            <p>2022</p>
            <p>2023</p>
        </section>

<svg preserveAspectRatio='xMidYMax' className={`${inView ? styles.active : ''} ${styles.lineSvg}`} viewBox="0 0 40 367">
<path d="M12 8C12 12.4183 15.5817 16 20 16C24.4183 16 28 12.4183 28 8C28 3.58172 24.4183 0 20 0C15.5817 0 12 3.58172 12 8ZM12 108C12 112.418 15.5817 116 20 116C24.4183 116 28 112.418 28 108C28 103.582 24.4183 100 20 100C15.5817 100 12 103.582 12 108ZM18.5 8V108H21.5V8H18.5Z" />
<path d="M12 108C12 112.418 15.5817 116 20 116C24.4183 116 28 112.418 28 108C28 103.582 24.4183 100 20 100C15.5817 100 12 103.582 12 108ZM12 208C12 212.418 15.5817 216 20 216C24.4183 216 28 212.418 28 208C28 203.582 24.4183 200 20 200C15.5817 200 12 203.582 12 208ZM18.5 108V208H21.5V108H18.5Z" />
<path d="M12 208C12 212.418 15.5817 216 20 216C24.4183 216 28 212.418 28 208C28 203.582 24.4183 200 20 200C15.5817 200 12 203.582 12 208ZM12 308C12 312.418 15.5817 316 20 316C24.4183 316 28 312.418 28 308C28 303.582 24.4183 300 20 300C15.5817 300 12 303.582 12 308ZM18.5 208V308H21.5V208H18.5Z" />
</svg>


<section    className={`${inView ? styles.active : ''} ${styles.textSection}`}>
           <div className={styles.flex}><AiOutlineCheckCircle className={styles.done}/>   <p>Graduated High School & joined the IDF</p></div> 
           <div className={styles.flex}><AiOutlineCheckCircle className={styles.done}/>     <p>Started Learning Web Dev in my free time</p></div>
           <div className={styles.flex}>    <p>Learned React & Studying back-end</p></div>
           <div className={styles.flex}>    <p>Improve front-end skills , Solid back-end skills & start cs degree</p></div> 
        </section>

      
        </div>


    </div>
    )
}

export default React.memo(Goals)