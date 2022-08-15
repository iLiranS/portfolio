import { useEffect, useRef, useState } from 'react';
import styles from './Bubble.module.css';

const smallVersion = document.documentElement.clientWidth <= 700 
let maxHeight = document.documentElement.clientHeight - 80
let maxWidth =  document.documentElement.clientWidth -80
if (smallVersion) {
    console.log('mobile bubble mode')
    maxHeight+=40;
    maxWidth+=40;
}
const Bubble = props =>{
    const [position,setPosition] = useState({ x : maxWidth/2 , y: maxHeight/2});
    const [xSpeed , setXSpeed] = useState(4);
    const [ySpeed , setYSpeed] = useState(4);
    const [isVisible,setIsVislbe] = useState(true);
    const [hasStarted,setHasStarted] = useState(false);
    const bubbleRef = useRef();

    const fps = 30;

  
    const updatePosition = () =>{
        console.log('updated')
        // need to call it every frame , so 1 seconds / frames 
        const newX = position.x + xSpeed
        const newY = position.y+ ySpeed
        if (newX >= maxWidth || newX <=0) { setXSpeed(prev => prev * -1)  }
        if (newY >= maxHeight || newY <=0) { setYSpeed(prev => prev * -1)  }
        setPosition( {x:newX , y:newY});

      
    }

    const startBubble = () =>{
        let xVelocity = (Math.random()*2)+1;
        let yVelocity = (Math.random()*2)+1;

        const reverse = Math.floor(Math.random()*2)
        if (reverse === 1) xVelocity = -xVelocity;
        if (reverse === 0) yVelocity = -yVelocity;
        setXSpeed(xVelocity);
        setYSpeed(yVelocity);
        updatePosition();
        setHasStarted(true);

    }


    useEffect(()=>{
        if (!isVisible){
            return;
        }
        else 
        setTimeout(() => {
            updatePosition()
        }, 1000/fps);
    },[position,isVisible])


    useEffect(()=>{

        if (bubbleRef.current && !hasStarted){
            startBubble();
        }
            
    },[bubbleRef])



    const destroyBubble = () =>{
        console.log('destroyed')
        setIsVislbe(false);
    }

    return(
        <div onClick={destroyBubble}  style={{'top':position.y+'px' ,'left':position.x+'px'}} ref={bubbleRef} className={`${styles.bubble} ${!isVisible ? styles.destroy : ''} `}>
        </div>
    )

}
export default Bubble;