import styles from './Header.module.css';
import { Link ,  } from 'react-router-dom';
import HomeButton from './HomeButton';
import {CgProfile} from 'react-icons/cg';
import {FaRegLightbulb} from 'react-icons/fa';
import {GiStairsGoal} from 'react-icons/gi'
const Header = props => {
const {activeSection} = props;
const name = props.currentProject;
const changeSection = section =>{
    props.setSection(section);
}


    return(
        <div className={styles.header}>
  <Link onClick={()=>{changeSection(1)}} style={{}}  to='/home'><HomeButton/></Link>
        <ul className={ !name ? styles.showUL : ''} >
           <Link className={styles.link} to='/home'> <li onClick={()=>{changeSection(1)}} className={activeSection===1 ? styles.active : ''}> <CgProfile/>   About</li> </Link>
           <Link className={styles.link} to='/home'> <li onClick={()=>{changeSection(2)}} className={activeSection===2 ? styles.active : ''}> <FaRegLightbulb/>   Projects {name && <span>{'>'} {name}</span>} </li></Link>
           <Link className={styles.link} to='/home'>  <li onClick={()=>{changeSection(3)}} className={activeSection===3 ? styles.active : ''}> <GiStairsGoal/>   Goals</li></Link>
        </ul>

        </div>
    )
}
export default Header