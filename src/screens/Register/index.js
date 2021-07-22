import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import * as actions from '../../redux/actions/authActions';
import {loginStyle, AppStyles} from '../AppStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Register = props => {
  const {error} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);
  const register = () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'Lütfen alanları doldurunuz.',
      });
      return;
    }
    props.register(email, password);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: `${error.message} 👋`,
      });
    }
  };

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

        <BouncyCheckbox
          fillColor={AppStyles.primaryColor}
          style={loginStyle.checkbox}
          isChecked={checkboxState}
          text="Lisans Sözleşmeleri"
          iconStyle={{borderColor: AppStyles.primaryColor}}
          disableBuiltInState
          onPress={() => setCheckboxState(!checkboxState)}
        />
        <TouchableOpacity
          disabled={!checkboxState}
          onPress={register}
          style={
            !checkboxState ? loginStyle.registerbutton : loginStyle.button
          }>
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
  register: (email, password) => dispatch(actions.register({email, password})),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
