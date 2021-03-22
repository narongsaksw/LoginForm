import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import InfoScreen from '../screens/InfoScreen';
import EditInfoScreen from '../screens/EditInfoScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  const isUserAuthorization = useSelector(
    state => state.user.isUserAuthorization,
  );
  return (
    <NavigationContainer>
      {isUserAuthorization ? (
        <Stack.Navigator>
          <Stack.Screen name="info" component={InfoScreen} />
          <Stack.Screen name="editInfo" component={EditInfoScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
