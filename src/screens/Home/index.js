import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppStyles} from '../AppStyles';
const Tab = createBottomTabNavigator();

import Upload from './Upload';
import Profile from './Profile';

const HomeScreen = props => {
  const {userData} = useSelector(state => state.auth);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{userData.email}</Text>
    </View>
  );
};

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'HomeScreen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'UploadScreen':
              iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
              break;
            case 'ProfileScreen':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: AppStyles.titleColor,
        inactiveTintColor: 'white',
        style: {
          backgroundColor: AppStyles.colorBackground,
          borderTopColor: 'white',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="UploadScreen"
        component={Upload}
        options={{title: 'Upload'}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};


export default Home;
