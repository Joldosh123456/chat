import React from "react";
import scss from "./Footer.module.scss";

function Footer() {
  return (
    <section className="container">
      <footer className={scss.footer}>
        <div>Version 1.0.0</div>
        <div>Политика конфидециальности</div>
        <div>Пользовательское соглашение</div>
      </footer>
    </section>
  );
}

export default Footer;
