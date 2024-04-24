import React from 'react'
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'

import Inicio from './Views/Inicio';
import NuevoCliente from './Views/NuevoCliente';
import DetallesCliente from './Views/DetallesCliente';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



const Stack = createStackNavigator();

const App = () => {
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: "Nuevo cliente"
            }}
          />
          <Stack.Screen
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: "Detalles cliente"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

const styles = StyleSheet.create({

})

export default App