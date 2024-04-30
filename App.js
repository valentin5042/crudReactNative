import React from 'react'
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'

import Inicio from './Views/Inicio';
import NuevoCliente from './Views/NuevoCliente';
import DetallesCliente from './Views/DetallesCliente';
import BarraSuperior from './Views/ui/Barra';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


//Definir el tema

const theme = {
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2'
  }
}


const Stack = createStackNavigator();



const App = () => {
  return (
    <>
  <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            // options={ ({navigation, route}) => ({
            //   headerLeft: (props) => <BarraSuperior {...props}
            //                     navigation={navigation}
            //                     route={route}
            //                     />
            // })}
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

      </PaperProvider>
    </>
  )
}

const styles = StyleSheet.create({

})

export default App