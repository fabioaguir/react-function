import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

export class App extends Component {
  render() {
    return (
      <>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </>
    );
  }
}

export default App;
