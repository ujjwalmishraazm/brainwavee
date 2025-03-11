import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import Benefits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/pricing.jsx";
import Roadmap from "./components/Roadmap";
import Services from "./components/Service.jsx";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       <Header/>
       <Hero/>
     <Benefits/>
        <Collaboration/>
     <Services/>
      <Pricing/>
      <Roadmap/>
       <Footer/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;