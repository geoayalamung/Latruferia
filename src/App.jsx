import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Paquetes from './components/Paquetes';
import Reviews from './components/Reviews';
import Pedidos from './components/Pedidos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <Gallery />
        <Menu />
        <Paquetes />
        <Reviews />
        <Pedidos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
