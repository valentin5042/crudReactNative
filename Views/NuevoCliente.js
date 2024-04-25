import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper'
import globalStyles from './styles/global'
import axios from 'axios'

const NuevoCliente = ({ navigation }) => {

  //Campos del formulario
  const [ nombre, setNombre ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ correo, setCorreo ] = useState('');
  const [ empresa, setEmpresa ] = useState('');
  const [ alerta, setAlerta ] = useState(false)

  //almacena al nuevo cliente en la base de datos
  const guardarCliente = async () => {
    //validar 
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
    }

    //generar cliente
    const cliente = { nombre, telefono, correo, empresa }

    // guardar el cliente en la API
    try {
      await axios.post('http:/192.168.0.33:3000/clientes', cliente)
    } catch (error) {
      console.log(error)
    }

    //redireccionar

    navigation.navigate('Inicio');

    //limpiar el form (opcional)

    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');

  }

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

        <Button
          mode='contained'
          onPress={ () => guardarCliente() }
        >
          Guardar Cliente
        </Button>

        <Portal>
          <Dialog
            visible={alerta}
            onDismiss={ () => setAlerta(false) }
          >
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={ () => setAlerta(false) }>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

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