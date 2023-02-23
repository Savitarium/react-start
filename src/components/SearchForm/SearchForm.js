import styles from './SearchForm.module.scss';
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput>Szukaj...</TextInput>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;