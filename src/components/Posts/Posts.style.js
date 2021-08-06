import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 55,
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  username: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'pink',
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
  product_container: {
    alignItems: 'center',
  },
  product_image: {
    marginTop: 10,
    borderRadius: 50,
    width: 200,
    height: 200,
  },
});
