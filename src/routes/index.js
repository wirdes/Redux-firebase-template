/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import Login from '../screens/Login';
import {authUser} from '../redux/actions/authActions';
import Register from '../screens/Register';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(authUser());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen
            name="HomeTab"
            component={Home}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
