import React, { Component } from 'react';
import Aleatorio from './Components/Aleatorio';
import Opcion from './Components/Opcion';
class App extends Component {

//   constructor(props) {
//     super(props){
//         this.state = getEstadoInicial();
//     }
// }

  state={
    datoinput: '',
    datoale: ''
  }
 
  datosAleatorio = (valor) => {
    this.setState({
      datoinput: valor,
    })
  }
  datosAle= (valor) => {
    this.setState({
      datoale: valor,
    })
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <h1 className="text-center" >Juego</h1>
          {this.state.datoale}
          <h5 className="lead text-center" >Adivina el numero aleatorio</h5>
          
          {/* <Opcion/> */}
          <Aleatorio
            datos={this.datosAleatorio}
            datos2= {this.datosAle}
          />
          
          <h1>{this.state.datoinput}</h1>
         
      </div>
      </div>
    );
 }
}

export default App;
