import React from "react";
import ManipulateDOM from "./ManipulateDOM"; // Importa el componente
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Manipulación DOM </h1>
        <ManipulateDOM /> {/* Renderiza el componente */}
      </header>
    </div>
  );
}

export default App;
