import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "102°F"; // this will be replaced
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment">
        <label>
          Name
          <input type="text" name="name" minlength="1" maxlength="30"></input>
        </label>
        <label>
          Image URL
          <input type="url" name="link" minlength="1"></input>
        </label>
        <p>Select the weather type:</p>
        <div>
          <div>
            <input type="radio" id="hot" value="hot"></input>
            <label>Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" value="warm"></input>
            <label>Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" value="cold"></input>
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default App;
