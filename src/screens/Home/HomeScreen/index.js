import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import database from '@react-native-firebase/database';

const HomeScreen = () => {
  const [data, setData] = useState();
  const func = async () => {
    const onValueChange = await database().ref(`/posts`).once('value');
    setData(onValueChange);
    console.log(data);
  };
  //useEffect(() => func());
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 52}}>{'owner'}</Text>
    </View>
  );
};

export default HomeScreen;
