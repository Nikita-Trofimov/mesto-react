
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
        <PopupWithFrom title="Редактировать профиль" name="edit-profile"/>
        <PopupWithFrom title="Новое место" name="add-card"/>
        <PopupWithFrom title="Обновить аватар" name="edit-avatar"/>
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
