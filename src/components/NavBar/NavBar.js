import styles from './NavBar.module.scss';
const NavBar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <a href="/" className={styles.fa + ' fa fa-tasks'}></a>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;