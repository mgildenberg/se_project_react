import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onClickDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(
      "ItemModal selectedCard for delete",
      selectedCard._id,
      selectedCard.id
    );

    onClickDelete(selectedCard._id);
  };

  return (
    <div className="modal">
      <div className="modal__content modal__content_item-card">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info-content">
          <div className="modal__info">
            <p className="modal__info-item">{selectedCard.name}</p>
            <p className="modal__info-item">Weather: {selectedCard.weather}</p>
          </div>
          <button
            className="modal__info_delete-item"
            onClick={handleDelete}
            type="button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
