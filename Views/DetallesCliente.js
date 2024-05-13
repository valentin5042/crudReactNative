import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper'
import globalStyles from './styles/global';
import axios from 'axios'

const DetallesCliente = ({ navigation, route }) => {
  const { setConsultarAPI } = route.params;
  const { nombre, telefono, correo, empresa, id } = route.params.item;

const mostrarConfirmacion = () => {
  Alert.alert(
    '¿Deseas eliminar este cliente?',
    'un contacto eliminado no se puede recuperar',
    [
      {text: 'si Eliminar', onPress: () => eliminarContacto() },
      {text: 'Cancelar', style: 'cancel'}
    ]
  )
}

const eliminarContacto = async () => {
  const url = `http://localhost:3000/clientes/{id}`;
  try {
    await axios.delete(url);
  } catch (error) {
    console.log(error)
  }
}

//redireccionar
navigation.navigate("Inicio");

// volver a consultar la API
setConsultarAPI(true)

  return (
    <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>{nombre}</Headline>
        <Text>Empresa: <Subheading>{empresa}</Subheading></Text>
        <Text>Correo: <Subheading>{correo}</Subheading></Text>
        <Text>Teléfono: <Subheading>{telefono}</Subheading></Text>

        <Button 
          style={styles.boton} 
          mode="contained" 
          icon="cancel"
          onPress={ () => mostrarConfirmacion() }
        >
          Eliminar cliente
        </Button>

        <FAB
          Style={globalStyles.fab}
          onPress={() => navigation.navigate("NuevoCliente", { cliente: route.params.item, setConsultarAPI })}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18
  },
  boton: {
    marginTop: 100,
    backgroundColor: "red"
  }
})

export default DetallesCliente;