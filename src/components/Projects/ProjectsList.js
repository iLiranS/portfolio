import styles from './ProjectsList.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import showPreview from '../../images/showSitePreview.jpg';
import blogPreview from '../../images/blogDark.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {BsMouse2} from 'react-icons/bs'
import React from 'react';



const ProjectsList = props =>{
    const images = [
        'https://i.ibb.co/v3HTdvy/image.jpg',
        showPreview,
        blogPreview
    ]
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        
        delay:100
      });
    const indicators = index => <div className={styles.indicator}><section className={styles.number}>{index + 1}</section></div>

    const toProjects = () =>{
        props.scrollTo(3);
      }


    return(

        <div   className={`${styles.mainContainer} ${inView ? styles.activeView : styles.hideView} `}>
            <div className={styles.projects}><h2>Projects</h2></div>

        <div ref={ref} className={`${styles.tvContainer} ${inView ? styles.pop : styles.disPop}`}>
           
            <div className={styles.legsHolder}></div>

            <Slide  indicators={indicators}  scale={1.4}  autoplay={true} className={styles.slide}>

            <Link  to='/projects/psychonary'>
            <div className={styles.eachSlide}>
                <div  style={{ 'backgroundImage': `url(${images[0]})` }}></div>
            </div>
            </Link>

            <Link to='/projects/showsite'>
            <div className={styles.eachSlide}>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}></div>
            </div>
            </Link>

            <Link to='/projects/blogsite'>
            <div className={styles.eachSlide}>
                <div style={{ 'backgroundImage': `url(${images[2]})` }}></div>
            </div>
            </Link>
            
        </Slide>


        </div>

        </div>
    )
}
export default React.memo(ProjectsList);