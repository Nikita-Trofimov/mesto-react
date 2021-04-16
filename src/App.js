import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpenActive] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpenActive] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpenActive] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpenActive(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpenActive(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpenActive(true);
  }
  
  function closeAllPopups() {
    setEditAvatarPopupOpenActive(false);
    setAddPlacePopupOpenActive(false);
    setEditProfilePopupOpenActive(false);
    setSelectedCard(null);
  }


  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input name="name" type="text" placeholder="Имя" defaultValue="" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
          <span className="name-input-error popup__error-message"></span>
          <input name="proffesion" type="text" placeholder="Занятие" defaultValue="" className="popup__input popup__input_type_profession" required minLength="2" maxLength="200" />
          <span className="proffesion-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input name="name" type="text" placeholder="Название" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" />
          <span className="name-input-error popup__error-message"></span>
          <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_card-link" required />
          <span className="image-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Создать</button>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avtar-link" required />
          <span className="image-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
