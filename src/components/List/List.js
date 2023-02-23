import styles from './List.module.scss';
import Column from '../Column/Column.js';
const List = () => {
    return [
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Rzeczy do zrobienia<span>niedługo</span></h1>
            </header>
            <p className={styles.description}>Interesujące rzeczy jakie chcę sprawdzić</p>
            <section className={styles.columns}>
                <Column title="Książki" icon="book" />
                <Column title="Filmy" icon="film" />
                <Column title="Gry" icon="gamepad" />
            </section>
        </div>
    ];
};

export default List;