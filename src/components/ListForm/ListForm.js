import styles from './ListForm.module.scss';
import {useDispatch} from "react-redux";
import {useState} from "react";
import shortid from "shortid";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import {addList} from "../../redux/store";
const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const id = shortid();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({id, title, description}));
        setTitle('');
        setDescription('');
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <span className={styles.addList}>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.addList}>Description:</span><TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Dodaj listę</Button>
        </form>
    )
}
export default ListForm;