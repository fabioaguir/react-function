import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

export class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h3" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={this.aoEnviarForm}
          validarCpf={this.validarCpf}
        />
      </Container>
    );
  }

  aoEnviarForm(dados) {
    console.log(dados);
  }

  validarCpf(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF deve ter 11 digitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }
}

export default App;
