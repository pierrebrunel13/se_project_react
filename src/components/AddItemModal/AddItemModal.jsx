import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };

  const { values, handleChange } = useForm(defaultValues);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  // function handle
  return (
    <ModalWithForm
      title="New garment "
      name="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name {""}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        image {""}
        <input
          type="url"
          name="link"
          className="modal__input"
          id="imageUrl"
          placeholder="image Url"
          required
          value={values.link}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="hot"
            name="weatherType"
            type="radio"
            value="hot"
            onChange={handleChange}
          />
          hot
        </label>
        </div>
        <div>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="warm"
            name="weatherType"
            type="radio"
            value="warm"
            onChange={handleChange}
          />
          warm
        </label>
        </div>
        <div>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="cold"
            name="weatherType"
            type="radio"
            value="cold"
            onChange={handleChange}
          />
          cold
        </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
