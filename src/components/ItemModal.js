import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("ModalWithForm");
  return (
    <div className="modal">
      <div className="modal__content modal__content_item-card">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link} />
        <div className="modal__info">
          <p className="modal__info-item">{selectedCard.name}</p>
          <p className="modal__info-item">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
