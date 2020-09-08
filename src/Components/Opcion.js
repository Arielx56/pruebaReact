import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import React, { Component } from 'react';

 

const AleatorioApp = ({ valor, valor2}) => {

    // HOOKS
    // comunmente dentro de las libreias los que son use son hooks
    // el useState retorna un arreglo con dos valores 
    const [aleatorio, setAleatorio] = useState(valor);
    const [valoringresado, setValorIngresado] = useState(valor2);
    

    const generadordenumaleatorio = () => {

        setAleatorio(

            parseInt(Math.random(aleatorio) * 100) 
        )
    }

    const  obtenerDato = () => {
        // e.preventDefault();

        setValorIngresado(valoringresado + 1)
        
            // if (valoringresado == aleatorio) {
            //     console.log('Felicidades has adivinado');
                
            // } else {
            //     if (valoringresado > aleatorio) {
            //         console.log('El numero es mayor sigue intentato') 
            //     } else {
            //         console.log('El numero es menor sigue intentato')
            //     }
            // } 
    }


    return (
        <>
            <h2>{aleatorio}</h2>
            <div className="text-center">
          <input className="text-center" type="text" placeholder="Ingresa un numero" />
        </div>
        <h2></h2>
            <div className="text-center">
            <div className="">
                <button className="btn btn-lg btn-danger " onClick={generadordenumaleatorio}>Iniciar</button>
            </div>
            <h2></h2>
            <div className="text-center" >
                <button onClick={obtenerDato} className="btn btn-lg btn-danger" >Adivinar</button>
                </div>
            <h2>{valoringresado}</h2>
            </div>
        
        </>
        
    );

}


AleatorioApp.prototype = {
    value: PropTypes.number
}

export default AleatorioApp;