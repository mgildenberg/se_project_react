import { React, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");

  const handleUrlChange = (e) => {
    // console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [radio, setRadio] = useState("");

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather: radio, imageUrl: link });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      onAddItem={onAddItem}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
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
          value={link}
          onChange={handleUrlChange}
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
            name="radio_button"
            onChange={handleRadioChange}
            value="hot"
          ></input>
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            className="modal__input_radio"
            type="radio"
            id="warm"
            name="radio_button"
            onChange={handleRadioChange}
            value="warm"
          ></input>
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            className="modal__input_radio"
            type="radio"
            id="cold"
            name="radio_button"
            onChange={handleRadioChange}
            value="cold"
          ></input>
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
