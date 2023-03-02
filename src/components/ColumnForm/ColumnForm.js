import styles from './ColumnForm.module.scss';
import {useState} from "react";
import Button from '../Button/Button.js';
import TextInput from "../TextInput/TextInput";
import {useDispatch} from "react-redux";
import shortid from  'shortid';
import {addColumn} from "../../redux/store";

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, settitle] = useState( '');
    const [icon, seticon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        settitle('');
        seticon('')
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <span className={styles.addColumn}>Tytuł kolumny:</span> <TextInput type="text" value={title} onChange={e => settitle(e.target.value)} />
            <span className={styles.addColumn}>Nazwa ikony: </span><TextInput type="text" value={icon} onChange={e => seticon(e.target.value)} />
            <Button >Dodaj kolumnę</Button>
        </form>
    );
}
export default ColumnForm;