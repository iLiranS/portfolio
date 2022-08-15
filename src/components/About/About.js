import styles from './About.module.css';
import React from 'react';
import {BsMouse2} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg';
import astronaut from '../../images/astronaut.png'



const About = props =>{

  const toProjects = () =>{
    props.scrollTo(2);
  }

    return(
        <div className={styles.mainContainer}>
          <div className={styles.headingHolder}>
          <img className={styles.astronaut} alt='astronaut' src={astronaut}></img>
          <h3> Hi , my name is <span>Liran</span> <br></br> and I am</h3>
          <h1>Frontend Developer</h1>

          </div>
          <section className={styles.rotatedSection}>
            <section className={styles.aboutSection}>
              <div className={styles.flex}>
              <CgProfile className={styles.profilePic}/>
              <h2>About</h2>
              </div>

            <p>
              I'm 20 years old trainee front end web developer ,
              <br></br>
              So far I've learned and mastered the core of the React framework and currently studying back-end web development while  expanding my front end knowledge & skills.
            </p>

            </section>
          </section>
          <div onClick={toProjects} className={styles.toNextSection}>
            <h4>Scroll</h4>
          <BsMouse2 className={styles.cgMouse}/>
          </div>
        </div>
    )

}
export default React.memo(About);
