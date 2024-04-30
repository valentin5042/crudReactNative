import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Headline, Text, Subheading, Button } from 'react-native-paper'
import globalStyles from './styles/global';

const DetallesCliente = ({ route }) => {
  const { nombre, telefono, correo, empresa } = route.params.item;

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

const eliminarContacto = () => {
  
}

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