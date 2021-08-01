import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';

const HomeScreen = () => {
  const userId = '123';
  const aad = () => {
    database()
      .ref('users/' + userId)
      .set({
        userId: userId,
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 52}}>Home Screen</Text>
      <TouchableOpacity onPress={aad}>
        <Text>Mert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
