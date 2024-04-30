import React, {useEffect, useState} from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper'
import globalStyle from './styles/global'

const Inicio = ({navigation}) => {

  // state de la app
  const [ clientes, setClientes ] = useState([]);
  const [ constultarAPI, setConsultarAPI] = useState(true);

useEffect (() => {

  const obtenerClientes = async () => {
    try {
      const resultado = await axios.get('');
      setClientes(resultado.data)
      setConsultarAPI(false);
    } catch (error) {
      console.log(error)
    }
  }
  if (constultarAPI) {
    obtenerClientes();
  }

}, [constultarAPI]);

  return (
    <>
        <View style={globalStyle.contenedor}>

          <Button onPress={() => navigation.navigate("NuevoCliente", { setConsultarAPI })}>
            Nuevo Cliente
          </Button>

          <Headline style={globalStyle.titulo}>{ clientes.length > 0 ? "Clientes" : "Aún no hay clientes"}</Headline>
          <FlatList 
            data={clientes}
            keyExtractor={ cliente => (cliente.id).toString() }
            renderItem={({item}) => (
              <List.Item 
                title={item.nombre}
                description={item.empresa}
                onPress={() => navigation.navigate("DetallesCliente", { item, setConsultarAPI })}
              />
            )}
          />
          <FAB 
            style={StyleSheet.fab}
            onPress={() => navigation.navigate("NuevoCliente", { setConsultarAPI })}
          />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20
  }
})

export default Inicio