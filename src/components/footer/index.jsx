import styles from "@/components/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.attribution}>
        © 2025 SMART CLIMA. <br />
        Todos os direitos reservados.
      </div>
      <div className={styles.attribution}>
        Desenvolvido por{" "}
        <a href="https://github.com/jsevitor" target="_blank">
          Vitor Oliveira
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
