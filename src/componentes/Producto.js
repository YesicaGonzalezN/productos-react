import React from "react";
import "../style.css/producto.css";

function Producto(props) {
  return (
    <div className="contenedor-producto">
      <img 
      className="imagen-producto" 
      src={require(`../imagenes/producto-${props.imagen}.jpg`)}
      />
       <div className="contenedor-texto-producto">
        <p className="nombre-producto">{props.nombre}</p>
        <p className="detalles-producto">{props.detalles}</p>
        <p className="texto-producto">{props.texto}</p>
      </div>
    </div>
  );
}

export default Producto;