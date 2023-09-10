import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/events";
import Sponsers from "./components/Sponsers";
import Service from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Events />
      <Sponsers />
      <About />
      <Service/>
      <Footer />
    </>
  );
}

export default App;
