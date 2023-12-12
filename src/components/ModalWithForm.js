import "../blocks/ModalWithForm.css";
import ToggleSwitch from "./ToggleSwitch";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {(buttonText = isLoading ? "Saving..." : "Save")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
