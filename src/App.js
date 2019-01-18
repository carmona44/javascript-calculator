/* eslint no-eval: 0 */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      cadena: '0', // Muestra todas las operaciones
      resultado: '0', // Muestra el valor actual y el resultado final
      fin: false, // Indica si ya se ha realizado una operación completa(true) o aún esta en proceso(false)
      botones: [
        {texto:"7", accion: this.addNumero},
        {texto:"8", accion: this.addNumero},
        {texto:"9", accion: this.addNumero},
        {texto:"*", accion: this.operacion, clase: "botonOperacion"},
        {texto:"4", accion: this.addNumero},
        {texto:"5", accion: this.addNumero},
        {texto:"6", accion: this.addNumero},
        {texto:"-", accion: this.operacion, clase: "botonOperacion"},
        {texto:"1", accion: this.addNumero},
        {texto:"2", accion: this.addNumero},
        {texto:"3", accion: this.addNumero},
        {texto:"+", accion: this.operacion, clase: "botonOperacion"},
        {texto:"/", accion: this.operacion, clase: "botonOperacion"},
        {texto:"0", accion: this.addNumero},
        {texto:".", accion: this.operacion, clase: "botonOperacion"},
        {texto:"=", accion: this.igual, clase: "botonIgual"},
        {texto:"AC", accion: this.limpiar, clase: "botonLimpiar"}
      ]
    };

    this.addNumero = this.addNumero.bind(this);
    this.operacion = this.operacion.bind(this);
    this.igual = this.igual.bind(this);
    this.limpiar = this.limpiar.bind(this);
  }

  addNumero(event){
    let regex = /\d/;

    if (this.state.fin){
      this.limpiar();
      this.setState({
        cadena: event.target.value,
        resultado: event.target.value
      });
    } else {
      if (this.state.cadena === '0'){
        this.setState({
          cadena: event.target.value,
          resultado: event.target.value
        });
      } else {
        if(!regex.test(this.state.resultado)){
          this.setState({
            cadena: this.state.cadena.concat(event.target.value),
            resultado: event.target.value
          });
        } else {
          this.setState({
            cadena: this.state.cadena.concat(event.target.value),
            resultado: this.state.resultado.concat(event.target.value)
          });
        }
      }
    }
  }

  operacion(event){
    let regex = /\d/; //Que la cifra a comprobar sea numérica
    let regex2 = /^\d$/; // Que todos los elementos de la cadena sean númericos

    if (this.state.fin && event.target.value !== "."){
      this.setState({
        fin: false,
        cadena: this.state.resultado + event.target.value,
        resultado: event.target.value
      });
    } else {
      if(regex.test(this.state.cadena[this.state.cadena.length - 1]) && event.target.value !== '.'){
        this.setState({
          cadena: this.state.cadena.concat(event.target.value),
          resultado: event.target.value
        });
      } else if (event.target.value === '.' && regex.test(this.state.cadena[this.state.cadena.length - 1]) && regex2.test(this.state.resultado)){
        this.setState({
          cadena: this.state.cadena.concat(event.target.value),
          resultado: this.state.resultado.concat(event.target.value)
        });
      } else if (event.target.value !== '.' && !regex.test(this.state.cadena[this.state.cadena.length - 1])){
        let nuevaCadena =  this.state.cadena.slice(0, this.state.cadena.length - 1);
        nuevaCadena += event.target.value;

        this.setState({
          cadena: nuevaCadena,
          resultado: event.target.value
        });
      }
    }
  }

  igual(){
    if (!this.state.fin){
      let resultadoFinal = eval(this.state.cadena);
      let cadenaFinal = this.state.cadena + "=" + resultadoFinal;
      this.setState({
        cadena: cadenaFinal,
        resultado: resultadoFinal,
        fin: true
      });
    }
  }

  limpiar(){
    this.setState({
      cadena: '0',
      resultado: '0',
      fin: false
    });
  }

  render() {
    return (
      <div className="App">
        <div id="calculadora">
          <div id="display">
            <p id="cadena">{this.state.cadena}</p>
            <span id="resultado">{this.state.resultado}</span>
          </div>
          <div id="botones">
            {
                this.state.botones.map(b => <Boton key={b.texto} clase={b.clase} texto={b.texto} accion={b.accion.bind(this)}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

class Boton extends Component {
  constructor (props){
    super(props);
    this.state = {
      texto: props.texto,
      accion: props.accion,
      clase: props.clase
    }
  }
  render(){
    return (
        <button onClick={this.state.accion} className={this.state.clase} value={this.state.texto}>{this.state.texto}</button>
    );
  }
}

export default App;
