import React from "react";
import {api} from "../utils/api";
import Card from "../components/Card"

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getInitialData()
    .then((res) => {
      const [cards, profile] = res;
      setUserName(profile.name);
      setuserDescription(profile.about);
      setUserAvatar(profile.avatar);
      setCards(cards);
    })
    .catch(err => console.log('Ошибка ' + err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={userAvatar} alt="фото аватара профиля" className="profile__photo" onClick = {props.onEditAvatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
           
      <section className="cards-section">
        <ul className="cards">
        {cards.map(card => { return (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} /> 
        )})}
        </ul>
      </section>
    </main>
  )
}

export default Main;