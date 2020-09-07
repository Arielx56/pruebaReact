import React, { Component,useState } from 'react';
import App from '../App';

function Aleatorio () {

    const numAleatorio;
    const valorIngresado;

    const generadordenumaleatorio = () => {
            
        numAleatorio = parseInt(Math.random() * 100)
        console.log(numAleatorio)

        this.props.datos2(numAleatorio)
    }

    valorIngresadoref = React.createRef();

    const obtenerDato = (e) => {
        e.preventDefault();

        // const valorAleatorio = this.numAleatorio.current.value

        valorIngresado = this.valorIngresadoref.current.value

        this.props.datos(valorIngresado);
        // this.props.datos2(valorAleatorio);
    }

   const gameOver = () => {

        if (valorIngresado === numAleatorio) {
            console.log('Felicidades has adivinado')
            // App.close();
        } else {
            if (valorIngresado > numAleatorio) {
                console.log('El numero es mayor sigue intentato') 
            } else {
                console.log('El numero es menor sigue intentato')
            }
        }
    }
    // render() { 
    //     return (  
    //         <>
    //            <div className="text-center">
    //       <input ref={this.valorIngresadoref} className="text-center" type="text" placeholder="Ingresa un numero" />
    //     </div>
    //         <h1>{this.numAleatorio}</h1>
    //         <div className="text-center">
    //         <div className="">
    //             <button className="btn btn-lg btn-danger " onClick={generadordenumaleatorio}>Iniciar</button>
    //         </div>
    //         <h2></h2>
    //         <div className="text-center" >
    //             <button onClick={obtenerDato, gameOver} className="btn btn-lg btn-danger" >Adivinar</button>
    //         </div>
    //         </div>
    //         </>
    //     );
    // }
}


// const mostrarGuia = ({ valor }) => {
    
//     // const [guia, setGuia] = useState(valor);
// }

export default Aleatorio;
