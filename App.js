import 'react-native-gesture-handler';
import React from 'react';

// Navegación
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';


// Pantallas
import { 
  Inicio,
  ResultadoBbva
} from './pantallas';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={ props => <DrawerContent {...props} /> }
      >
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="ResultadoBbva" component={ResultadoBbva} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
