import { useEffect, useState } from "react";
import styles from "@/components/toggle_theme/ToggleTheme.module.css";

const ToggleTheme = () => {
  // Estado para armazenar o tema (light ou dark)
  const [theme, setTheme] = useState("light");

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Efeito para aplicar o tema ao carregar a página
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // Se não houver um tema salvo no localStorage, verifica o sistema
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkScheme ? "dark" : "light");
    }
  }, []);

  // Aplica a classe 'dark' ou 'light' no body conforme o estado
  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <span className={theme === "light" ? styles.selected : ""}>
        <i className="bi bi-sun-fill"></i>
      </span>
      <span className={theme === "dark" ? styles.selected : ""}>
        <i className="bi bi-moon-stars-fill"></i>
      </span>
    </div>
  );
};

export default ToggleTheme;
