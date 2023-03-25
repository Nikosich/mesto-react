<div className="popup popup-place" id="popup-place">
      <div className="popup__modal-window popup-place__modal-window">
        <button type="button" className="popup__close-button popup-place__close-button button"></button>
        <form className="popup-form popup-form_place"  name="photoForm" method="post" novalidate>
          <h2 className="popup-form__header">Новое место</h2>
          <label className="popup-form__field">
            <input
              className="popup-form__input popup-form__input_place_name"
              type="text"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
              id="place-input"
              name="place"
            />
            <span className="popup-form__input-error place-input-error"></span>
          </label>
          <label className="popup-form__field">
            <input
              className="popup-form__input popup-form__input_link_photo "
              placeholder="Ссылка на картинку"
              type="url"
              required
              id="link-input"
              name="placeLink"
            />
            <span className="popup-form__input-error link-input-error"></span>
          </label>
          <button className="popup-form__save-button" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup-avatar" id="popup-avatar">
      <div className="popup__modal-window popup-avatar__modal-window">
        <button type="button" className="popup__close-button popup-avatar__close-button button"></button>
        <form className="popup-form popup-form_avatar"  name="avatarForm" method="post" novalidate>
          <h2 className="popup-form__header">Обновить аватар</h2>
          <label className="popup-form__field">
            <input
              className="popup-form__input popup-form__input_link_avatar "
              placeholder="Ссылка на фото"
              type="url"
              required
              id="link-avatar"
              name="avatar"
            />
            <span className="popup-form__input-error link-avatar-error"></span>
          </label>
          <button className="popup-form__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup-delete" id="popup-delete">
      <div className="popup__modal-window popup-delete__modal-window">
        <button type="button" className="popup__close-button popup-delete__close-button button"></button>
        <form className="popup-form popup-form_delete"  name="deleteForm">
          <h2 className="popup-form__header">Вы уверены?</h2>
          <button className="popup-form__delete-button" type="submit">Да</button>
        </form>
      </div>
    </div>
    </div>