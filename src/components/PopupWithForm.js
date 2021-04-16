function PopupWithFrom(props) {
  return (
    <>
      <section className={props.isOpen ? (`popup popup-${props.name} popup_opened`) : (`popup popup-${props.name}`)}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form name={props.name} className="popup__form" noValidate>
            {props.children}
          </form>
          <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        </div>
      </section>
    </>
  )
}

export default PopupWithFrom;