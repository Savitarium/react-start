import styles from './Card.module.scss';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {toggleCardFavorite} from "../../redux/store";
import clsx from "clsx";
const Card = props => {
    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
    const dispatch = useDispatch();
    const handleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId))
    }
    return (
        <li className={styles.card}>{props.title}{''}
            <button onClick={handleFavorite} className={clsx(styles.button, favoriteValue && styles.isActive)}>
                <span className={'fa fa-star'}></span>
            </button>
        </li>
    );
};

export default Card;