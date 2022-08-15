import Home from '../components/HomePage/Home'
const Homepage = props =>{

    return(
        <div>
           <Home setIndicator={props.setIndicator} activeSection={props.activeSection}/>
        </div>
    )
}

export default Homepage