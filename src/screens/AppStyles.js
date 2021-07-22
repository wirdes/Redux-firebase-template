import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const AppStyles = {
  primaryColor: 'rgb(255, 67, 80)',
  secondaryColor: '#11818a',
  solidColor: '#b5b2b2',
  textColor: '#fff',
  titleColor: '#fff',
  inputTextColor: 'rgb(255, 67, 80)',
  colorBackground: 'rgb(255, 67, 80)',
  titleFontSize: 24,
  contentFontSize: 20,
  defaultFontSize: 16,
  borderRadiusMain: 25,
  borderRadiusSmall: 5,
  width,
  height,
};

const loginStyle = StyleSheet.create({
  logoContainer: {flex: 4, justifyContent: 'center', alignItems: 'center'},
  logo: {width: width * 0.6, height: width * 0.6},
  block: {flex: 3, justifyContent: 'center', alignItems: 'center'},
  container: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'space-around',
  },
  textInput: {
    color: 'rgb(255, 67, 80)',
    textAlign: 'center',
    borderRadius: 15,
    width: width * 0.9,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  button: {
    borderRadius: 15,
    width: width * 0.9,
    backgroundColor: 'rgb(255, 67, 80)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  registerbutton: {
    borderColor: 'red',
    borderRadius: 15,
    width: width * 0.9,
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    margin: 13,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  checkbox: {
    paddingRight: 45,
  },
});

export {AppStyles, loginStyle};
