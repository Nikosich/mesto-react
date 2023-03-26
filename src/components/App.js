import { useState } from "react";

import "../index.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const openEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const openEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const openAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={openEditAvatarClick}
        onEditProfile={openEditProfileClick}
        onAddPlace={openAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submitBtn="Сохранить"
      >
        <fieldset className="popup-form__field">
          <input
            className="popup-form__input popup-form__input_text_name "
            type="text"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            id="name-input"
            name="name"
          />
          <span className="popup-form__input-error name-input-error"></span>
        </fieldset>
        <fieldset className="popup-form__field">
          <input
            className="popup-form__input popup-form__input_text_job"
            type="text"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
            id="about-input"
            name="job"
          />
          <span className="popup-form__input-error about-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        submitBtn="Сохранить"
      >
        <fieldset className="popup-form__field">
          <input
            className="popup-form__input popup-form__input_link_avatar "
            placeholder="Ссылка на фото"
            type="url"
            required
            id="link-avatar"
            name="avatar"
          />
          <span className="popup-form__input-error link-avatar-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="place"
        title="Редактировать профиль"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        submitBtn="Создать"
      >
        <fieldset className="popup-form__field">
          <input
            className="popup-form__input popup-form__input_place_name"
            type="text"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            id="place-input"
            name="place"
          />
          <span className="popup-form__input-error place-input-error"></span>
        </fieldset>
        <fieldset className="popup-form__field">
          <input
            className="popup-form__input popup-form__input_link_photo "
            placeholder="Ссылка на картинку"
            type="url"
            required
            id="link-input"
            name="placeLink"
          />
          <span className="popup-form__input-error link-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
