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
      <ModalWithForm title="New Garment">These are the children</ModalWithForm>
    </div>
  );
}

export default App;
