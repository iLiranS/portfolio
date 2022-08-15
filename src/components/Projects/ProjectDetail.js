import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ProjectDetail.module.css'


const ProjectDetail = (props) =>{

    const params = useParams();
    const projectName = params.name;
    const data = props.data;
    const names = data.map (item => item.name);
    const index = names.indexOf(projectName);

useEffect(()=>{
  if (projectName) props.setProjectName(projectName);
},[props,projectName])

    const item = data[index];
    let isExist = false;
    if (index > -1) isExist=true;
    return(
        <Fragment>
            {!isExist && <p>project does not exists !</p>}
           {isExist &&<div className={styles.main}>

            <h2>Project name :<span> {item.name}</span></h2>
           
          <p> {item.info}</p>
            <section>Link : {item.link ? <a target='_blank' rel='noreferrer' href={item.link}>Click</a> : <span>no link provided</span>}</section>

          <div className={styles.gallery}>
          <h2>Gallery :</h2>
           {item.images.map(item=>
            <img key={Math.random()} alt="preview" src={item}></img>)}
           </div>
           
           </div>}
      


    
        </Fragment>
    )
}
export default ProjectDetail