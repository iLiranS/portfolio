import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import images from "../../images/images";
import styles from './ProjectDetail.module.css';




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
    let imagesContent =''
    if (index > -1) {
      isExist=true;  
     imagesContent = images.filter(item => item.title === projectName).map(img => <img key={img.id} src={img.src} alt={'preview'}></img>)
    }
    return(
        <Fragment>
            {!isExist && <p>project does not exists !</p>}
           {isExist &&<div className={styles.main}>

            <h2>Project name :<span> {item.name}</span></h2>
           
          <p> {item.info}</p>
            <section>Link : {item.link ? <a target='_blank' rel='noreferrer' href={item.link}>Click</a> : <span>no link provided</span>}</section>

          <div className={styles.gallery}>
          <h2>Gallery :</h2>
           {imagesContent}
           </div>
           
           </div>}
      


    
        </Fragment>
    )
}
export default ProjectDetail