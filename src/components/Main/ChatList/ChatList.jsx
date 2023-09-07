import React from "react";
import Image from "next/image";
import scss from "./ChatList.module.scss";
import user_name_icon from "../../../assets/images/user_name_icon.svg";
import price_icon from "../../../assets/images/price_icon.svg";
import star_icon from "../../../assets/images/star_icon.svg";
import review_icon from "../../../assets/images/reviews_icon.svg";
import location_icon from "../../../assets/images/location_icon.svg";
import message_icon from "../../../assets/images/message_icon.svg";
import ellipse from "../../../assets/images/ellipse.svg";

function ChatList({
  id,
  user_avatar,
  user_name,
  user_price,
  user_stars,
  user_reviews,
  user_location,
  last_message,
}) {
  return (
    <div className={scss.chat__list}>
      <div className={scss.user_logo}>
        <Image src={user_avatar} alt="Аватар пользователя" priority />
      </div>
      <div className={scss.user_info}>
        <div className={scss.first_floor}>
          <p>{user_name}</p>
          <Image src={user_name_icon} alt="user_name_icon" className={scss.user_name_icon}/>
        </div>
        <div className={scss.second_floor}>
          <Image src={price_icon} alt="price_icon" />
          <p>{user_price}</p>
          <Image src={ellipse} alt="ellipse" className={scss.ellipse} />
          <Image src={star_icon} alt="star_icon" />
          <p>{user_stars}</p>
          <Image src={ellipse} alt="ellipse" className={scss.ellipse} />
          <Image src={review_icon} alt="review_icon" />
          <p>{user_reviews}</p>
        </div>
        <div className={scss.third_floor}>
          <Image src={location_icon} alt="location_icon" />
          <p>{user_location}</p>
        </div>
        <div className={scss.fourth_floor}>
          <Image src={message_icon} alt="message_icon" />
          <p>{last_message}</p>
        </div>
        <div className={scss.unread_message}>
            <p>1</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
