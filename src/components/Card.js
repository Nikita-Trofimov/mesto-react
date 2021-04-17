function Card ({card, onCardClick}){
  function handleClick() {
    onCardClick(card);
  }  
  return (
    <li className="card" onClick={handleClick}>
      <img src={card.link} alt={card.name} className="card__image"/>
        <div className="card__image-subtitle">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-info-container">
            <button type="button" className="card__like"></button>
            <p className="card__likes-number">{card.likes.length}</p>
          </div>
        </div>
      <button type="button" className="card__remove"></button>
    </li>
  )
}

export default Card;