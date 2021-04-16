
function ImagePopup() {
  return (
    <section className="popup popup-illustration-container">
      <figure className="popup-illustration">
          <img className="popup-illustration__img" alt="фото иллюстрации" src="images/karachaevsk.jpg"/>
          <figcaption className="popup-illustration__title">Карачаево-Черкессия</figcaption>
          <button type="button" className="popup__close-button"></button>    
      </figure>
    </section>
  )
}

export default ImagePopup;