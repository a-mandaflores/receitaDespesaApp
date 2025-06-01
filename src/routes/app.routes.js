import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import MeuPerfil from '../pages/MeuPerfil';
import Registrar from '../pages/Registrar';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      screenOptions={{

        drawerStyle:{
          backgroundColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:'#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212'

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />
      <AppDrawer.Screen
        name="Registrar"
        component={Registrar}
      />
      <AppDrawer.Screen
        name="MeuPerfil"
        component={MeuPerfil}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;