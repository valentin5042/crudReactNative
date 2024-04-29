import React, {useEffect, useState} from 'react'
import { Text, FlatList, View } from 'react-native'
import axios from 'axios';
import { List } from 'react-native-paper'

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
        <View>
          <FlatList 
            data={clientes}
            keyExtractor={ cliente => (cliente.id).toString() }
            renderItem={({item}) => (
              <List.Item 
                title={item.nombre}
                description={item.empresa}

              />
            )}
          />
        </View>
    </>
  )
}

export default Inicio