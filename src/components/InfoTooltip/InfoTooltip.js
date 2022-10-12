import PopupWithForm from '../PopupWithForm/PopupWithForm';
import success from '../../images/icons/icon__success.svg';
import failed from '../../images/icons/icon__failed.svg';

function InfoTooltip( {onClose, message, isActive, type = "error"}) {
  return (
    <PopupWithForm
      name="tooltip"
      isActive={isActive}
      onClose={onClose}>
      <img
        className="popup__info-tooltip"
        src={type === "success" ? success : failed}
        alt={type === "success" ? "Success" : "error"}
      />
      <h2 className="popup__title popup__title_center">{message}</h2>
    </PopupWithForm>
  );
}

export default InfoTooltip;
