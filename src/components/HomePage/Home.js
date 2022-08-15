import React ,{ useEffect, useRef, useState  } from 'react'
import About from '../About/About'
import Goals from '../Goals/Goals'
import ProjectsList from '../Projects/ProjectsList'
import styles from './Home.module.css'
const Home = (props) =>{
    const divRef = useRef();
    const [alreadyAdded,setAlreadyAdded] = useState(false);
    const { activeSection } = props;



    const setIndicatorHandler = (val)=>{
        props.setIndicator(val);
    }

    useEffect(()=>{
        const element = divRef.current;
        const checkScroll = () =>{
            const maxHeight = divRef.current.offsetHeight *2;
            const currentScroll = divRef.current.scrollTop;
    
            let result = 1;
            if ( currentScroll >= maxHeight/2  ) result=2
            if (currentScroll >= maxHeight/2 + (maxHeight/3)  ) result=3;
          // props.setSection(result); 
          if(activeSection !== -1) setIndicatorHandler(result);
            
            
        }
      

       if(divRef && !alreadyAdded) { element.addEventListener('scroll',checkScroll); setAlreadyAdded(true); }

        return(()=>{element.removeEventListener('scroll',checkScroll)})
    },[divRef])


   

   
// now I need to update activeSection if user scroll down enough ..
    useEffect(()=>{
        if (activeSection === -1) return;
            const maxHeight = divRef.current.offsetHeight *2;
            let scrollTo = 0;
        if (activeSection ===2) scrollTo = maxHeight/2;
        if (activeSection ===3) scrollTo = maxHeight;

         divRef.current.scrollTop = scrollTo;
        
    },[activeSection])

    const scrollTo = (section) =>{
        const maxHeight = divRef.current.offsetHeight *2;
        switch (section){

            case 2:
                divRef.current.scrollTop = maxHeight/2;
            break;

            case 3:
                divRef.current.scrollTop = maxHeight;
            break;

            default:
                break;
        }

    }


    return(
        <div ref={divRef} className={styles.mainContainer}>

            <About scrollTo={scrollTo}/>
           <ProjectsList scrollTo={scrollTo}/>
           <Goals/>

        </div>
    )
}
export default Home;