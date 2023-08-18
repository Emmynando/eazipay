import "./App.css";
import ContactForm from "./component/Layout/Contactform";
import HerosSection from "./component/Layout/HeroSection";
import ProductInfo from "./component/Layout/ProductInfo";
import Slider from "./component/Layout/Slider";
import Subscription from "./component/Layout/Subscriptions";
import Footer from "./component/UI/Footer";

function App() {
  return (
    <>
      <HerosSection />
      <Slider />
      <ProductInfo />
      <Subscription />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
