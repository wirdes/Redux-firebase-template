import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../../redux/actions/authActions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = props => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  const {userData} = useSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <View style={styles.pageName}>
        <Text style={styles.pageNameText}>Profile</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.emailText}>Your E-Mail: {userData.email}</Text>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  pageNameText: {textAlign: 'center', fontSize: 55},
  pageName: {flex: 1},
  block: {flex: 9, justifyContent: 'space-evenly', alignItems: 'center'},
  button: {
    padding: 25,
    backgroundColor: 'rgb(255, 67, 80)',
    borderRadius: 55,
  },
  buttonText: {fontSize: 25, color: 'white', textAlign: 'center'},
  emailText: {fontSize: 20, textAlign: 'center', color: 'black'},
});

export default Profile;
