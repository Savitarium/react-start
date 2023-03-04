import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import {getFavoriteCard} from "../../redux/store";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCard);
    if (favoriteCards.length === 0) {
        return (
            <PageTitle>You don't have any favourite cards.</PageTitle>
        );
    }
    return (
        <div>
                <PageTitle>Favorite</PageTitle>
                <div className={styles.column}>
                    <ul className={styles.cards}>
                        {favoriteCards.map((favoriteCard) => (
                            <Card
                                key={favoriteCard.id}
                                title={favoriteCard.title}
                                isFavorite={favoriteCard.isFavorite}
                            />
                        ))}
                    </ul>
                </div>
        </div>
    )
}
export default Favorite;