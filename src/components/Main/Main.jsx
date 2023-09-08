"use client";
import React, { useState } from "react";
import scss from "./Main.module.scss";
import search_icon from "../../assets/images/search_icon.svg";
import searching from "../../assets/images/search_history_icon.svg";
import chat_header_icon from "../../assets/images/chat_header_icon_user.svg";
import more_icon from "../../assets/images/more_icon.svg";
import attach from "../../assets/images/attach.svg";
import sending from "../../assets/images/sending.svg";
import user_avatar from "../../assets/images/user_avatar.svg";
import user_name_icon from "../../assets/images/user_name_icon.svg";
import star_icon from "../../assets/images/star_icon.svg";
import ellipse from "../../assets/images/ellipse.svg";
import reviews_icon from "../../assets/images/reviews_icon.svg";
import info_location from "../../assets/images/info_location.svg";
import violation from "../../assets/images/violation.svg";
import refusal from "../../assets/images/refusal.svg";
import stroke from "../../assets/images/stroke.svg";
import Image from "next/image";
import { ChatListConst } from "../../constants/ChatListConst";
import { ReviewsListConst } from "@/constants/ReviewsListConst";
import ChatList from "./ChatList/ChatList";
import ReviewsList from "./ReviewsList/ReviewsList";

function Main() {
  const [isActive, setActive] = useState(true);

  const toggleSwitcher = () => {
    setActive(!isActive);
  };

  const handleButtonClick = () => {
    toggleSwitcher();
  };

  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.chat__list}>
            <div className={scss.search}>
              <div className={scss.search__input}>
                <Image src={search_icon} alt="Поиск" />
                <input
                  type="text"
                  placeholder="Поиск"
                  id="username"
                  name="username"
                />
              </div>
              <div className={scss.searching}>
                <Image src={searching} alt="Искать" />
              </div>
            </div>
            <div className={scss.chat__list_scroll}>
              {ChatListConst.map((item) => (
                <ChatList key={item.id} {...item} />
              ))}
            </div>
          </div>

          <Image src={stroke} alt="Аватар пользователья" />

          <div className={scss.chat}>
            <div className={scss.chat__header}>
              <Image src={chat_header_icon} alt="Аватар пользователья" />
              <div className={scss.schat_header_info}>
                <h3>Имя Фамилия</h3>
                <p>Online</p>
              </div>

              <Image
                src={more_icon}
                alt="Подробнее"
                className={scss.more_icon}
                onClick={() => setVisible(!isVisible)}
              />
            </div>
            <div className={scss.in_chat}>
              <div className={scss.in_chat_buttons}>
                <button
                  className={`${scss.button_spec} ${
                    isActive ? scss.active : ""
                  }`}
                  onClick={handleButtonClick}
                >
                  Выбрать специалиста
                </button>
                <button
                  className={`${scss.button_review} ${
                    !isActive ? scss.active : ""
                  }`}
                  onClick={handleButtonClick}
                >
                  Оставить отзыв
                </button>
              </div>
              <p className={scss.chat_date}>12.11.2022</p>

              <div className={scss.messages}>
                <div className={scss.message_left}>
                  Текст текст текст текст текст текст
                </div>
                <div className={scss.message_time}>12:00</div>
              </div>
              <div className={scss.messages}>
                <div className={scss.message_right}>
                  Текст текст текст текст текст текст
                </div>
                <div className={scss.message_time_right}>12:00</div>
              </div>
              <div className={scss.messages}>
                <div className={scss.message_left}>Текст текст</div>
                <div className={scss.message_time}>12:00</div>
              </div>
              <div className={scss.auto_message}>
                <div className={scss.auto_message_message}>
                  Данный заказ на данный <br />
                  момент неактивен
                </div>
                <div className={scss.message_left}>Ура! Ты снова в деле!</div>
              </div>
            </div>
            <div className={scss.sending_message}>
              <Image src={attach} alt="Прикрепить" />
              <input type="text" placeholder="Твое сообщение..." />
              <div className={scss.sending_message_img}>
                <Image src={sending} alt="Отправить" />
              </div>
            </div>
          </div>


          {isVisible && (
            <>
              <Image src={stroke} alt="Аватар пользователья" />
            <div className={scss.information}>
              <div className={scss.information_header}>
                <div className={scss.information_header_left}>
                  <Image src={user_avatar} alt="Аватар специалиста" />
                </div>
                <div className={scss.information_header_right}>
                  <div>
                    <p className={scss.user_name}>Имя специалиста</p>
                    <Image src={user_name_icon} alt="Аватар специалиста" />
                  </div>
                  <div>
                    <Image src={star_icon} alt="star_icon" />
                    4.5
                    <Image src={ellipse} alt="ellipse" />
                    <Image src={reviews_icon} alt="reviews_icon" />5 отзывов
                  </div>
                  <div>
                    <Image src={info_location} alt="info_location" />3 км от
                    тебя
                  </div>
                </div>
              </div>
              <div className={scss.information_items}>
                <div className={scss.connect}>
                  <div>
                    <Image src={violation} alt="violation" />
                    Сообщить о нарушении
                  </div>
                  <div>
                    <Image src={refusal} alt="refusal" />
                    Отказаться от специалиста
                  </div>
                </div>
                <div className={scss.more_information}>
                  <div className={scss.more_title}>Образование</div>
                  <div className={scss.more_description}>
                    МГУ — менеджмент — 2010 г.
                  </div>

                  <div className={scss.more_title}>Опыт работы</div>
                  <div className={scss.more_description}>
                    <ul>
                      <li>ФБР — Репетитор по английскому — 2016-2018 гг.</li>
                      <li>ФБК — Репетитор по английскому — 2016-2018 гг.</li>
                    </ul>
                  </div>

                  <div className={scss.more_title}>Язык услуг</div>
                  <div className={scss.more_description}>
                    Русский, Английский
                  </div>

                  <div className={scss.more_title}>
                    Минимальная стоимость услуги
                  </div>
                  <div className={scss.more_description}>от 2200 ₽</div>

                  <div className={scss.more_title}>О себе</div>
                  <div className={scss.more_description}>
                    БУБУБУБУУубубудаоааощшаоа
                  </div>

                  <div className={scss.more_title}>Фотографии</div>
                  <div className={scss.more_description}>
                    <div className={scss.photos}>
                      <div className={scss.photo}></div>
                      <div className={scss.photo}></div>
                      <div className={scss.photo}></div>
                    </div>
                  </div>

                  <div className={scss.more_title}>Отзывы</div>
                  <div className={scss.more_description}>
                    {ReviewsListConst.map((e) => (
                      <ReviewsList key={e.id} {...e} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </>) }
        </div>
      </div>
    </main>
  );
}

export default Main;
