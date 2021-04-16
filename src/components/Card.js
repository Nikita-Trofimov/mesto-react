function Card (props){
  function handleClick() {
    props.onCardClick(props.card);
  }  
  return (
    <li className="card" onClick={handleClick}>
      <img src={props.card.link} alt="фото карточки" className="card__image"/>
        <div className="card__image-subtitle">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__like-info-container">
            <button type="button" className="card__like"></button>
            <p className="card__likes-number">{props.card.likes.length}</p>
          </div>
        </div>
      <button type="button" className="card__remove"></button>
    </li>
  )
}

export default Card;