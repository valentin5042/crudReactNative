import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Headline, Button } from 'react-native-paper'
import globalStyles from './styles/global'

const NuevoCliente = () => {

  //Campos del formulario
  const [ nombre, setNombre ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ correo, setCorreo ] = useState('');
  const [ empresa, setEmpresa ] = useState('');

  return (
    <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo} >Añadir Nuevo Cliente</Headline>

        <TextInput 
          style={styles.input}
          label='Nombre'
          placeholder='Ingresa tu nombre'
          onChangeText={ texto => setNombre(texto) }
          value={nombre}
        />
        <TextInput 
          style={styles.input}
          label='Teléfono'
          placeholder='Ingresa tu numero teléfonico'
          onChangeText={ texto => setTelefono(texto) }
          value={telefono}
        />
        <TextInput 
          style={styles.input}
          label='Correo'
          placeholder='Ingresa tu correo'
          onChangeText={ texto => setCorreo(texto) }
          value={correo}
        />
        <TextInput 
          style={styles.input}
          label='Nombre Empresa'
          placeholder='Ingresa el nombre de tu empresa'
          onChangeText={ texto => setEmpresa(texto) }
          value={empresa}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent'
  }
})

export default NuevoCliente;