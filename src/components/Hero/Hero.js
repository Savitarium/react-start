import styles from './Hero.module.scss';
const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Moja pierwsza aplikacja na react'cie</h1>
            <p className={styles.subtitle}>Prosta to-do lista z kolumnami i kartami</p>
        </div>
    );
};
export default Hero;