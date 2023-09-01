import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/About";
import Events from "./components/events";
import Sponsers from "./components/Sponsers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Sponsers />
      <Support />
      <Footer />
    </>
  );
}

export default App;
