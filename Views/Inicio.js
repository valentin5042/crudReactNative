import React, {useEffect, useState} from 'react'
import { Text } from 'react-native'
import axios from 'axios';

const Inicio = () => {

  // state de la app

  const [ clientes, setClientes ] = useState([]);

useEffect (() => {

  const obtenerClientes = async () => {
    try {
      const resultado = await axios.get('');
      setClientes(resultado.data)
    } catch (error) {
      console.log(error)
    }
  }
  obtenerClientes();
}, []);

  return (
    <>
        <Text>Desde incio</Text>
    </>
  )
}

export default Inicio