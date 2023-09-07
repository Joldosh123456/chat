"use client";
import React, { useState } from "react";
import scss from "./MyChatMain.module.scss";
import search_icon from "../../assets/images/search_icon.svg";
import work1 from "../../assets/images/work1.svg";
import work2 from "../../assets/images/work2.svg";
import work3 from "../../assets/images/work3.svg";
import work4 from "../../assets/images/work4.svg";
import work5 from "../../assets/images/work5.svg";
import work6 from "../../assets/images/work6.svg";
import work_price from "../../assets/images/work_price.svg";
import work_chat from "../../assets/images/work_chat.svg";
import work_view from "../../assets/images/work_view.svg";
import detail_btn from "../../assets/images/detail_btn.svg";
import edit_btn from "../../assets/images/edit_btn.svg";
import delete_btn from "../../assets/images/delete_btn.svg";

import Image from "next/image";
import { ChatListConst } from "../../constants/ChatListConst";
import ChatList from "../Main/ChatList/ChatList";

function MyChatMain() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <main>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.profile}>
            <div className={scss.work}>
              <Image src={work1} alt="Название заказа" />
              <p>Название заказа</p>
            </div>

            <div className={scss.new__work}>
              <div className={scss.new__work_left}>
                <Image src={work6} alt="Название заказа" />
                <div className={scss.unread}>
                  <p>1</p>
                </div>
              </div>
              <div className={scss.new__work_right}>
                <div className={scss.title}>
                  <p>Репетитор по английскому языку</p>
                </div>
                <div className={scss.details}>
                  <Image src={work_price} alt="Название заказа" />
                  <p>От 220 ₽</p>
                </div>
                <div className={scss.details}>
                  <Image src={work_chat} alt="Название заказа" />
                  <p>15 чатов</p>
                </div>
                <div className={scss.details}>
                  <Image src={work_view} alt="Название заказа" />
                  <p>21 просмотр</p>
                </div>

                <div className={scss.buttons}>
                  <div className={scss.button}>
                    <Image src={detail_btn} alt="Детали" />
                    <p>Детали <br /> анкеты</p>
                  </div>
                  <div className={scss.button}>
                    <Image src={edit_btn} alt="Редактировать" />
                    <p>Редактировать анкету</p>
                  </div>
                  <div className={scss.button}>
                    <Image src={delete_btn} alt="Удалить" />
                    <p>Удалить <br /> анкету</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={scss.work}>
              <Image src={work2} alt="Название заказа" />
              <p>Название заказа</p>
            </div>

            <div className={scss.work}>
              <Image src={work3} alt="Название заказа" />
              <p>Название заказа</p>
            </div>

            <div className={scss.work}>
              <Image src={work4} alt="Название заказа" />
              <p>Название заказа</p>
            </div>

            <div className={scss.work}>
              <Image src={work5} alt="Название заказа" />
              <p>Название заказа</p>
            </div>
          </div>

          <div className={scss.chat__list}>
            <div className={scss.chat__list_buttons}>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Предложения" ? scss.selectedButton : ""
                }`}
                onClick={() => handleButtonClick("Предложения")}
              >
                <p>Предложения</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Открытые" ? scss.selectedButton : ""
                }`}
                onClick={() => handleButtonClick("Открытые")}
              >
                <p>Открытые</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Выполненные" ? scss.selectedButton : ""
                }`}
                onClick={() => handleButtonClick("Выполненные")}
              >
                <p>Выполненные</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Архив" ? scss.selectedButton : ""
                }`}
                onClick={() => handleButtonClick("Архив")}
              >
                <p>Архив</p>
              </div>
            </div>
            <div className={scss.search}>
              <div className={scss.search__input}>
                <Image src={search_icon} alt="Поиск" />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className={scss.chat__list_scroll}>
              {ChatListConst.map((item) => (
                <ChatList key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyChatMain;
