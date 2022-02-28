import './App.css';
import Caracteristicas from './components/Caracteristicas';
import Cotizacion from './components/Cotizacion';
import Footer from './components/Footer';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="App">
      <Cotizacion/>
      <Caracteristicas/>
      <Galeria/>
      <Footer/>
    </div>
  );
}

export default App;
