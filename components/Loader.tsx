import CircularProgress from '@mui/material/CircularProgress';
import styles from '../styles/Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.loader_container}>
            <CircularProgress color='secondary'/>
        </div>
    );
}