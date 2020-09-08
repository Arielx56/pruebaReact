import React, { Component } from 'react';
// import App from '../App';

let numAleatorio;
let valorIngresado;
let mensaje;
let estado = false;

class Aleatorio extends Component {

    generadordenumaleatorio = () => {
            
        numAleatorio = parseInt(Math.random() * 100)
        console.log(numAleatorio)
        this.props.valorAleatorio(numAleatorio)
    }

    
    valorIngresadoref = React.createRef();

    obtenerDato = (e) => {
        e.preventDefault();

        valorIngresado = this.valorIngresadoref.current.value
        this.props.valorIngresado(valorIngresado)
        this.props.comparandoValores()
            if (valorIngresado == numAleatorio) {
                estado = true
                this.props.valorEncontrado(estado)
                this.props.gameOver()
            } else {
                if (valorIngresado > numAleatorio) {
                    mensaje ='El numero es mayor sigue intentato'
                    this.props.mensajeDeAyuda(mensaje); 
                } else {
                    mensaje ='El numero es menor sigue intentato'
                    this.props.mensajeDeAyuda(mensaje); 
                }
            }    
    }

    
    render() { 
        return (  
            <>
               <div className="text-center">
          <input ref={this.valorIngresadoref} className="text-center" type="text" placeholder="Ingresa un numero" />
        </div>
            <h1>{this.numAleatorio}</h1>
            <div className="text-center">
            <div className="">
                <button className="btn btn-lg btn-danger " onClick={this.generadordenumaleatorio}>Iniciar</button>
            </div>
            <h2></h2>
            <div className="text-center" >
                <button name="btn-adivinar" onClick={this.obtenerDato} className="btn btn-lg btn-danger" >Adivinar</button>
            </div>
            </div>
            </>
        );
    }
}

export default Aleatorio;
