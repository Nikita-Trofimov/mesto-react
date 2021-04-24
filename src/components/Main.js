import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import Card from './Card'
import { api } from '../utils/api';

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(currentUserContext);

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // Отправляем запрос в API и получаем обновлённые данные карточки
  // console.log(api.changeLikeCardStatus(card._id, !isLiked));
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
} 

  React.useEffect(() => {
    api.getInitialCards('/cards')
    .then((cards) => {
      setCards(cards);
    })
    .catch(err => console.log('Ошибка ' + err));
  }, []);

  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={currentUser.avatar} alt="фото аватара профиля" className="profile__photo" onClick = {props.onEditAvatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
           
      <section className="cards-section">
        <ul className="cards">
        {cards.map(card => { return (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} /> 
        )})}
        </ul>
      </section>
    </main>
  )
}

export default Main;