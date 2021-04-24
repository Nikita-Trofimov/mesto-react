
function EditProfilePopup({isOpen, onClose }) {
  return (
    <PopupWithForm title="Редактировать профиль" name="edit-profile" submitButtonTitle="Сохранить" isOpen={isOpen} onClose={onClose}>
      <input name="name" type="text" placeholder="Имя" defaultValue="" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
      <span className="name-input-error popup__error-message"></span>
      <input name="proffesion" type="text" placeholder="Занятие" defaultValue="" className="popup__input popup__input_type_profession" required minLength="2" maxLength="200" />
      <span className="proffesion-input-error popup__error-message"></span>
    </PopupWithForm>
  )
}