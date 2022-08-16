import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
const NotFound = () =>{

    return(
        <div className={styles.mainContainer}>
            Oops!  <br></br>404 - Page not found
            <Link to={'/home'}>Home</Link>
        </div>
    )
}
export default NotFound