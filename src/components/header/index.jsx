import styles from "@/components/header/Header.module.css";
import { actualDate } from "@/utils/functions";

const Header = ({ cityName }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <div className={styles.location}>
          <span>
            <i className="bi bi-geo-alt-fill"></i>
          </span>
          <span>{cityName}</span>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchBarContainer}>
          <span>
            <i className="bi bi-search"></i>
          </span>
          <input type="text" placeholder="Buscar cidade..." />
        </div>
      </div>
      <div className={styles.toogleTheme}>
        <div>Toogle Tema</div>
      </div>
    </header>
  );
};

export default Header;
