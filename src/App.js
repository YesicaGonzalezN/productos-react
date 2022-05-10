import './App.css';
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Estos son algunos de nuestros productos</h1>
        <Producto 
        nombre="Baul Berlín"
        detalles="Bolso en Ecocuero"
        texto="Bolso negro en material Ecocuero PU, cuenta con doble correa, una de ellas regulable, el interior es forrado en Animal Print."
        imagen="berlin"/>
        <Producto 
        nombre="Mochila Geriba"
        detalles="Mochila en Ecocuero"
        texto="Mochila negra en material Ecocuero PU, cuenta con un bolsillo delantero y dos bolsillos laterales, el interior es forrado en Animal Print."
        imagen="geriba"/>
        <Producto 
        nombre="Billetera Savage"
        detalles="Billetera en Ecocuero"
        texto="Billetera en material Ecocuero PU, cuenta con cierre, en su interior podemos encontrar tarjeteros y una sección para los billetes."
        imagen="savage"/>
      </div>
    </div>
  );
}

export default App;
