import { currentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Card ({ card, onCardClick, onCardLike }){
  const currentUser = React.useContext(currentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__remove ${isOwn ? '' : 'card__remove_display-none'}`
  ); 
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_black' : ''}`
  ); 

  function handleClick() {
    onCardClick(card);
  } 

  
  function handleLikeClick(evt) {
    evt.stopPropagation();
    onCardLike(card);
  } 
   
  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
        <div className="card__image-subtitle">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-info-container">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <p className="card__likes-number">{card.likes.length}</p>
          </div>
        </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
    </li>
  )
}

export default Card;