import styles from './SearchForm.module.scss';
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {updateSearchString} from "../../redux/store";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector((state) => state.searchString);
    const [searchValue, setSearchValue] = useState({searchString});

    useEffect(() => {
        setSearchValue(searchString);
    }, [searchString]);
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Wyszukiwanie dla: ', searchValue);
        dispatch(updateSearchString(searchValue));
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <form className={styles.searchForm} onSubmit={e => handleSearch(e)}>
            <TextInput value={searchValue} onChange={handleChange}>{searchValue}</TextInput>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
