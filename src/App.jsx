import Hero from "../components/hero";
import Cards from "../components/cards";
import About from "../components/about";
import Navbar from "../components/navbar";
import "./App.css";

function App() {
  return (
    <main className="xl:px-40 max-w-screen-2xl">
      <Navbar />
      <Hero />
      <Cards />
      <About />
    </main>
  );
}

export default App;
