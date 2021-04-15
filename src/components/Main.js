import avatar from "../../src/images/avatar__kusto.jpg";
function Main() {
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
  function handleEditAvatarClick() {
    openPopup(document.querySelector('.popup-edit-avatar'));
  }
  function handleEditProfileClick() {
    openPopup(document.querySelector('.popup-edit-profile'));
  }
  function handleAddPlaceClick() {
    openPopup(document.querySelector('.popup-add-card'));
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={avatar} alt="фото аватара профиля" className="profile__photo" onClick = {handleEditAvatarClick} />
        </div>
        <div className="profile__text">
          <h1 className="profile__title"></h1>
            <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
            
      <section className="cards-section">
        <ul className="cards"></ul>
      </section>
    </main>
  )
}

export default Main;