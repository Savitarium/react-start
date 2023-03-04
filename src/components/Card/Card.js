import styles from './Card.module.scss';
import {useDispatch} from "react-redux";
import {useState} from "react";
import clsx from "clsx";
import {toggleCardFavorite, removeCard} from "../../redux/cardsRedux";
import {useLocation} from "react-router-dom";
const Card = props => {
    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
    const dispatch = useDispatch();
    const handleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId))
    }
    const deleteCard = (e) => {
        e.preventDefault();
        dispatch(removeCard(cardId));
    }
    const location = useLocation();
    const isFavorite = location.pathname === '/favorite';
    return (
        <li className={styles.card}>{props.title}{''}
            <div className={styles.buttons}>
                <button onClick={handleFavorite} className={clsx(styles.button, favoriteValue && styles.isActive)}>
                    <span className={'fa fa-star'}></span>
                </button>
                {!isFavorite && (
                    <button onClick={deleteCard} className={styles.button}>
                        <i className={'fa fa-trash'}></i>
                    </button>
                )}
            </div>
        </li>
    );
};

export default Card;