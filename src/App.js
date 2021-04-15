
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithFrom from "./components/PopupWithForm";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithFrom title="Редактировать профиль" name="edit-profile">
          <input name="name" type="text" placeholder="Имя" defaultValue="" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
          <span className="name-input-error popup__error-message"></span>
          <input name="proffesion" type="text" placeholder="Занятие" defaultValue="" className="popup__input popup__input_type_profession" required minLength="2" maxLength="200" />
          <span className="proffesion-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithFrom>
        <PopupWithFrom title="Новое место" name="add-card">
          <input name="name" type="text" placeholder="Название" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" />
          <span className="name-input-error popup__error-message"></span>
          <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_card-link" required />
          <span className="image-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Создать</button>
        </PopupWithFrom>
        <PopupWithFrom title="Обновить аватар" name="edit-avatar">
          <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avtar-link" required />
          <span className="image-input-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithFrom>
          <section className="popup popup-illustration-container">
            <figure className="popup-illustration">
                <img className="popup-illustration__img" alt="фото иллюстрации" src="images/karachaevsk.jpg"/>
                <figcaption className="popup-illustration__title">Карачаево-Черкессия</figcaption>
                <button type="button" className="popup__close-button"></button>    
            </figure>
          </section>
          
        </div>
      </div>
  );
}

export default App;
