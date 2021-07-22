import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/authActions';
import {loginStyle} from '../AppStyles';
import {useSelector} from 'react-redux';

const Login = props => {
  const {error} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'Lütfen alanları doldurunuz.',
      });
      return;
    }
    props.login(email, password);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: `${error.message} 👋`,
      });
    }
  };
  //console.log(`${error} ${userData.email} ${isLoggedIn}`);

  return (
    <>
      <View style={{flex: 2}}>
        <Toast ref={ref => Toast.setRef(ref)} />
      </View>
      <View style={loginStyle.logoContainer}>
        <Image
          source={require('../../assets/image/valorant.png')}
          style={loginStyle.logo}
        />
        {/* <Text style={{fontSize: 65}}>LOGO</Text> */}
      </View>
      <View style={loginStyle.container}>
        <TextInput
          style={loginStyle.textInput}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"
          value={email}
          onChangeText={d => setEmail(d)}
        />

        <TextInput
          autoCapitalize="none"
          secureTextEntry
          style={loginStyle.textInput}
          placeholder="Şifre"
          value={password}
          onChangeText={d => setPassword(d)}
        />
        <TouchableOpacity onPress={login} style={loginStyle.button}>
          <Text style={loginStyle.text}>Giriş Yap ✔</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={loginStyle.button}
          onPress={() => props.navigation.navigate('Register')}>
          <Text style={loginStyle.text}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyle.block}></View>
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login({email, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
