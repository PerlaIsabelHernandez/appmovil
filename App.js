import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
//import Principal from './screen/Principal';

//

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Login'component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name='Registro' component={Registro}/>

        </Stack.Navigator>

    </NavigationContainer>
    
      
  );
};


export default App;

