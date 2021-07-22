import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Upload = props => {
  const {userData} = useSelector(state => state.auth);
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text>{userData.email}</Text>
    </View>
  );
};

export default Upload;
