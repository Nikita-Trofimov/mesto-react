function PopupWithFrom(props) {
  return (
    <>
      <section className={`popup popup-${props.name}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form name={props.name} className="popup__form" noValidate>
            <input name="name" type="text" placeholder="Имя" defaultValue="" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
            <span className="name-input-error popup__error-message"></span>
            <input name="proffesion" type="text" placeholder="Занятие" defaultValue="" className="popup__input popup__input_type_profession" required minLength="2" maxLength="200" />
            <span className="proffesion-input-error popup__error-message"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </section>
{/* 
      <section className="popup popup-add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="add-card" className="popup__form" noValidate>
            <input name="name" type="text" placeholder="Название" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" />
            <span className="name-input-error popup__error-message"></span>
            <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_card-link" required />
            <span className="image-input-error popup__error-message"></span>
            <button type="submit" className="popup__submit-button">Создать</button>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </section>

      <section className="popup popup-edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="add-card" className="popup__form" noValidate>
            <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avtar-link" required />
            <span className="image-input-error popup__error-message"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </section>

      <section className="popup popup-remove-confirm">
        <div className="popup__container">
          <h2 className="popup__title popup__title-confirm">Вы уверены?</h2>
          <form name="confirm" className="popup__form">
            <button type="submit" className="popup__submit-button popup__submit-button-confirm">Да</button>
          </form>
          <button type="button" className="popup__close-button"></button>
        </div>
      </section> */}
    </>
  )
}

export default PopupWithFrom;