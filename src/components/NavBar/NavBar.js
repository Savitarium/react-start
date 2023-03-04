import styles from './NavBar.module.scss';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <a href="/" className={styles.fa + ' fa fa-tasks'}></a>
                </div>
                <div>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;