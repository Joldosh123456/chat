"use client";
import { useState } from "react";
import scss from "./Header.module.scss";
import button_back from "../../assets/images/button_back.svg";
import button_home from "../../assets/images/button_home.svg";
import button_new_order from "../../assets/images/button_new_order.svg";
import button_my_chat from "../../assets/images/button_my_chat.svg";
import translate_icon from "../../assets/images/translate_icon.svg";
import setting_icon from "../../assets/images/setting_icon.svg";
import cookie_icon from "../../assets/images/cookie_icon.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isCutomerActive, setCustomerActive] = useState(true);

  const toggleSwitcher = () => {
    setCustomerActive((prevState) => !prevState);
  };

  return (
    <div
      className={`${scss.header} ${
        isCutomerActive ? scss.header_active : scss.header_active_yellow
      }`}
    >
      <div className="container">
        <div className={scss.header__items}>
          <div className={scss.header__left}>
            <Image src={button_back} alt="Назад" />
            <p>Репетитор по английскому языку</p>
          </div>
          <div className={scss.header__center}>
            <div className={scss.home}>
              <Image src={button_home} alt="Главная" />
              <p>Главная</p>
            </div>
            <div className={scss.new_order}>
              <Image src={button_new_order} alt="Новый заказ" />
              <p>Новый заказ</p>
            </div>

            <Link href='/myChat'>
            
            <div className={scss.my_chats}>
              <Image src={button_my_chat} alt="Мои чаты" />
              <p>Мои чаты</p>
            </div>

            </Link>

          </div>
          <div className={scss.header__right}>
            <div className={scss.user_switcher}>
              <Link href="/customer">
                <div
                  className={`${scss.customer} ${
                    isCutomerActive ? scss.active : ""
                  }`}
                  onClick={toggleSwitcher}
                >
                  <p>Заказчик</p>
                </div>
              </Link>

              <Link href='/specialist'>
              <div
                className={`${scss.specialist} ${
                  !isCutomerActive ? scss.active_yellow : ""
                }`}
                onClick={toggleSwitcher}
              >
                <p>Специалист</p>
              </div>
              </Link>
            </div>
            <div className={scss.menu}>
              <Image src={translate_icon} alt="Язык" />
              <Image src={setting_icon} alt="Настройки" />
              <Image src={cookie_icon} alt="cookie_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
