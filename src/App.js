import avatar from "../src/images/avatar__kusto.jpg";

function App() {
  return (
    <div className="body">
      <div className="page">
          <header className="header">
            <div className="header__logo"></div>  
          </header>
          <main className="main">
            <section className="profile">
              <div className="profile__avatar-overlay">
                <img src={avatar} alt="фото аватара профиля" className="profile__photo" />
              </div>
              <div className="profile__text">
                  <h1 className="profile__title"></h1>
                  <button type="button" className="profile__edit-button"></button>
                  <p className="profile__subtitle"></p>
              </div>
              <button type="button" className="profile__add-button"></button>
            </section>
            
            <section className="cards-section">
              <ul className="cards"></ul>
            </section>
          </main>

          <footer className="footer">
            <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
          </footer>

          <section className="popup popup-edit-profile">
            <div className="popup__container">
              <h2 className="popup__title">Редактировать профиль</h2>
              <form name="edit-profile" className="popup__form" noValidate>
                <input name="name" type="text" defaultValue="" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
                <span className="name-input-error popup__error-message"></span>
                <input name="proffesion" type="text" defaultValue="" className="popup__input popup__input_type_profession" required minLength="2" maxLength="200" />
                <span className="proffesion-input-error popup__error-message"></span>
                <button type="submit" className="popup__submit-button">Сохранить</button>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </section>

          <section className="popup popup-add-card">
            <div className="popup__container">
              <h2 className="popup__title">Новое место</h2>
              <form name="add-card" className="popup__form" noValidate>
                <input name="name" type="text" placeholder="Название" className="popup__input popup__input_type_name" required minLength="2" maxLength="30"/>
                <span className="name-input-error popup__error-message"></span>
                <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_card-link" required/>
                <span className="image-input-error popup__error-message"></span>
                <button type="submit" className="popup__submit-button">Создать</button>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </section>

          <section className="popup popup-illustration-container">
            <figure className="popup-illustration">
                <img className="popup-illustration__img" alt="фото иллюстрации" src="images/karachaevsk.jpg"/>
                <figcaption className="popup-illustration__title">Карачаево-Черкессия</figcaption>
                <button type="button" className="popup__close-button"></button>    
            </figure>
          </section>

          <section className="popup popup-remove-confirm">
            <div className="popup__container">
              <h2 className="popup__title popup__title-confirm">Вы уверены?</h2>
              <form name="confirm" className="popup__form">
                <button type="submit" className="popup__submit-button popup__submit-button-confirm">Да</button>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </section>

          <section className="popup popup-edit-avatar">
            <div className="popup__container">
              <h2 className="popup__title">Обновить аватар</h2>
              <form name="add-card" className="popup__form" noValidate>
                <input name="image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avtar-link" required/>
                <span className="image-input-error popup__error-message"></span>
                <button type="submit" className="popup__submit-button">Сохранить</button>
              </form>
              <button type="button" className="popup__close-button"></button>
            </div>
          </section>
          
        </div>
      </div>
  );
}

export default App;
