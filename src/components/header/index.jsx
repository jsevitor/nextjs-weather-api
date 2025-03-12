import styles from "@/components/header/Header.module.css";
import { useState } from "react";

const Header = ({ setCityName }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim()) {
      setCityName(searchInput);
      setSearchInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <div className={styles.logo}>SMART CLIMA</div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchBarContainer}>
          <span>
            <i className="bi bi-search" onClick={handleSearch}></i>{" "}
            {/* Ação de clique */}
          </span>
          <input
            type="text"
            placeholder="Buscar cidade..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
      <div className={styles.toogleTheme}>
        <div>Toogle Tema</div>
      </div>
    </header>
  );
};

export default Header;
