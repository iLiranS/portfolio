import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeButton.module.css'
const HomeButton = props =>{
const test = useRef();
useEffect(()=>{
    if (test.current){
    console.log(test.current.strokeDasharray)
    }
},[test])
    return(
        <div className={styles.mainContainer}>

        <svg preserveAspectRatio='xMidYMax' viewBox="0 0 181 295" fill="none" >
    <path d="M1 289.044V6.07918C1 2.36227 4.91156 -0.0442216 8.23606 1.61803L32.2361 13.618C33.93 14.465 35 16.1963 35 18.0902V255C35 257.761 37.2386 260 40 260H162.91C164.804 260 166.535 261.07 167.382 262.764L179.382 286.764C181.044 290.088 178.6 294 174.883 294H5.98377C3.22234 294 1 291.806 1 289.044Z" />
</svg>

        </div>
    )
}
export default HomeButton