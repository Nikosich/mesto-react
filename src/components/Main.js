import { api } from "../utils/Api";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCard] = useState([]);


  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfile()])
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCard(cards);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__edit-button"
            onClick={onEditAvatar}
          ></button>
          <img
            className="profile__image"
            src={userAvatar}
            alt="Кусто"
          />
          <div className="profile__info">
            <div className="profile__item">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="edit-button button"
                aria-label="редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          className="add-button button"
          type="button"
          aria-label="добавить новое фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <ul className="places__container" id="places__container">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
