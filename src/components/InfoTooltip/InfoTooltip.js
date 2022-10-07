import PopupWithForm from '../PopupWithForm/PopupWithForm';
import success from '../../images/icons/icon__success.svg';
import failed from '../../images/icons/icon__failed.svg';

function InfoTooltip(
  {
    onClose,
    status: { isOpen, successful, text }
  }) {
  return (
    <PopupWithForm
      name="tooltip"
      isOpen={isOpen}
      onClose={onClose}>
      <img
        className="popup__info-tooltip"
        src={successful ? success : failed}
        alt={successful ? "Success" : "Failed"}
      />
      <h2 className="popup__title popup__title_center">{text}</h2>
    </PopupWithForm>
  );
}

export default InfoTooltip;
