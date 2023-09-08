"use client";
import React, { useState } from "react";
import scss from "./SpecialistMain.module.scss";
import search_icon from "../../assets/images/search_icon.svg";

import Image from "next/image";
import { ChatListConst } from "../../constants/ChatListConst";
import ChatList from "../Main/ChatList/ChatList";

function SpecialistMain() {
  const [selectedButton, setSelectedButton] = useState(null);


  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <main>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.chat__list}>

            <div className={scss.chat__list_buttons}>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Предложения" ? scss.selectedButton1 : ""
                }`}
                onClick={() => handleButtonClick("Предложения")}
              >
                <p>Предложения</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Открытые" ? scss.selectedButton2 : ""
                }`}
                onClick={() => handleButtonClick("Открытые")}
              >
                <p>Открытые</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Выполненные" ? scss.selectedButton3 : ""
                }`}
                onClick={() => handleButtonClick("Выполненные")}
              >
                <p>Выполненные</p>
              </div>
              <div
                className={`${scss.chat__list_button} ${
                  selectedButton === "Архив" ? scss.selectedButton4 : ""
                }`}
                onClick={() => handleButtonClick("Архив")}
              >
                <p>Архив</p>
              </div>
            </div>
            <div className={scss.search}>
              <div className={scss.search__input}>
                <Image src={search_icon} alt="Поиск" />
                <input type="text" placeholder="Поиск" id="1" name="Поиск" />
              </div>
            </div>
            <div className={scss.chat__list_scroll}>
              {ChatListConst.map((item) => (
                <ChatList key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className={scss.chat}>
            <p>Чтобы начать общение, выбери чат</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SpecialistMain;
