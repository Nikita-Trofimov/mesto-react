import avatar from "../../src/images/avatar__kusto.jpg";
function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img src={avatar} alt="фото аватара профиля" className="profile__photo" onClick = {props.onEditAvatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__title"></h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
            
      <section className="cards-section">
        <ul className="cards"></ul>
      </section>
    </main>
  )
}

export default Main;