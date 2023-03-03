import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';
const Hero = () => {
    return (
        <div className={styles.hero}>
            <PageTitle>Moja pierwsza aplikacja na react'cie</PageTitle>
            <h1 className={styles.title}></h1>
            <p className={styles.subtitle}>Prosta to-do lista z kolumnami i kartami</p>
        </div>
    );
};
export default Hero;