import React from 'react';
import {View, Text, TouchableOpacity, Settings} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../../redux/actions/authActions';

const Profile = props => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  const {userData} = useSelector(state => state.auth);
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{userData.email}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>LogOut </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
