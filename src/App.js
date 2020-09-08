import React, { Component } from 'react';
import Aleatorio from './Components/Aleatorio';

const getEstadoInicial = () => {
 
  return {
    numeroAleatorio: '',
    valorIngresado: '',
    estacomparando: false,   // sera falso mientras no sean iguales los valores de aleatorio y el valor ingresado
    mensaje: '',
    valorEncontrado: false,
    input: ''
  }
}

class App extends Component {

  // para decirle al App que esto es la parte inicial de la app

  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
    
  }

  valorAleatorio = (valor) => {
    this.setState({
      numeroAleatorio: valor,
      mensaje: ''
      })
  }
  valorIngresado = (valor) => {
    this.setState({
      valorIngresado: valor
      })
  }

  mensajeDeAyuda = (valor) => {
    this.setState({
      mensaje: valor
    })
  }

  comparandoValores = () => {
    
    this.setState({
      estacomparando: true
    })
  }
  valorEncontrado = (estado) => {
    this.setState({
      valorEncontrado: estado,
    })
  }

  gameOver = () => {
    this.setState({
      mensaje: 'Felicidades Has Adivinado!!',
      numeroAleatorio: '',
      valorIngresado: '',
      estacomparando: false,
      valorEncontrado: false,
    }
    );
  }
  // gameOver() {
  //   this.setState(
  //     getEstadoInicial()
  //   );
  // }

 
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <h1 className="text-center" >Juego</h1>
        
          <h5 className="lead text-center" >Adivina el numero aleatorio</h5>
          
          {/* <Opcion/> */}
          <Aleatorio
            valorAleatorio={this.valorAleatorio}
            valorIngresado={this.valorIngresado}
            mensajeDeAyuda={this.mensajeDeAyuda}
            comparandoValores={this.comparandoValores}
            valorEncontrado={this.valorEncontrado}
            // gameOver={()=>this.gameOver}
            gameOver={this.gameOver}
          />
          <h6 className="lead text-center">{this.state.mensaje}</h6>
      </div>
      </div>
    );
 }
  
}

export default App;
