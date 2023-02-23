import styles from './Button.module.scss';
import SearchForm from "../SearchForm/SearchForm";
const Button = props => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};
export default Button;