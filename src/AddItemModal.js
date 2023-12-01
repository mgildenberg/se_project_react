import { React, useState } from "react";
import ModalWithForm from "./components/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      onAddItem={onAddItem}
      isOpen={isOpen}
      onSubmit={onAddItem}
    >
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          required
        />
      </label>
      <label>
        Image URL
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Image URL"
          required
        ></input>
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            className="modal__input_radio"
            type="radio"
            id="hot"
            value="hot"
            name="radio_button"
          ></input>
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            className="modal__input_radio"
            type="radio"
            id="warm"
            value="warm"
            name="radio_button"
          ></input>
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            className="modal__input_radio"
            type="radio"
            id="cold"
            value="cold"
            name="radio_button"
          ></input>
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
