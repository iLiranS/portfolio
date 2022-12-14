import { Fragment, useState} from 'react';
import { Route , Switch , Redirect  } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetail from './components/Projects/ProjectDetail';

import Header from './components/Head/Header';
import './App.css';
import Bubble from './components/HomePage/Bubble';


const DUMMY_DATA = [
  {name:'showsite' ,
   info:'This site is using api based on IMDB and takes information about ratings of tv shows and movies , the user can favorite a show, open up its imdb page and more',
  images : ['showSitePreview.jpg','showSiteMobile.jpg']
  },
  {name:'blogsite' ,
   info:'dummy responsive website inspired by reddit , the user can see blogs , change theme and view but its not completed :p',
  images : ['blogDark.jpg','blogLight.jpg','blogMobile.jpg']
  },
  {name:'psychonary',
  info :'A site with the purpose of practicing english-hebrew vocabulary , including  firebase database ,live chat , minigames & more.',
  images : ['psychonary.jpg','psychonary2.jpg','psychonaryMobile.jpg'],
  link:'https://psychonary.herokuapp.com'
  }
]
function App() {
  const [activeSection,setActiveSection] = useState(1);
  const [indicator,setIndicator] = useState(1);
  const [currentProject,setCurrentProject] = useState(null);

const setSection = section =>{
  setActiveSection(section);
  setCurrentProject(null);
}
const setIndicatorHandler = (index) =>{
  setIndicator(index);
  setActiveSection(-1);
}
const setProjectNameHandler = (name) =>{
setCurrentProject(name);
}


  return (
  <Fragment>

<header>
  <Header currentProject={currentProject} setSection={setSection} activeSection={indicator}></Header>
</header>

<main>
  <Switch>
    <Route path='/' exact>
      <Redirect to='/home'/>
     </Route>
    <Route path='/projects/:name'><ProjectDetail setProjectName={setProjectNameHandler}   data={DUMMY_DATA}/></Route>
    <Route path ='/home'> <Homepage  setIndicator={setIndicatorHandler} activeSection={activeSection} /> </Route>
    <Route path='*'> <NotFoundPage /> </Route>
    
  </Switch>

  <Bubble/>
  <Bubble/>

  </main>
    </Fragment>
  );
}

export default App;
