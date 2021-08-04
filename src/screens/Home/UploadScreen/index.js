/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {loginStyle, AppStyles} from '../../AppStyles';
import {useSelector} from 'react-redux';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

const getTime = () => {
  return `${('0' + new Date().getDate()).slice(-2)}_${(
    '0' +
    (new Date().getMonth() + 1)
  ).slice(-2)}_${new Date().getFullYear()}---${
    new Date().getHours() + 3
  }_${new Date().getMinutes()}_${new Date().getSeconds()}`;
};
const Upload = () => {
  const {userData} = useSelector(state => state.auth);
  const [hasImage, setHasImage] = useState(false);
  const [imageUriGallary, setimageUriGallary] = useState('');
  const [imageUri, setimageUri] = useState('');

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Toast.show({
          type: 'info',
          text1: 'Uyarı',
          text2: 'Resim seçimini iptal ettiniz',
        });
      } else if (response.error) {
        Toast.show({
          type: 'info',
          text1: 'Uyarı',
          text2: 'Resim seçme hatası: ' + response.error,
        });
      } else if (response.customButton) {
        Toast.show({
          type: 'info',
          text1: 'Uyarı',
          text2: 'User tapped custom button: ' + response.customButton,
        });
      } else {
        const source = {
          uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
        };
        setimageUriGallary(source);
        setimageUri(response.assets[0]);
        setHasImage(true);
      }
    });
  };

  const send = async () => {
    const fileRef = `images/${userData.userId}---${getTime()}.jpg`;
    const postRef = 'posts/' + getTime();
    const reference = storage().ref(fileRef);
    await reference.putFile(imageUri.uri);
    const url = await storage().ref(fileRef).getDownloadURL();
    try {
      await database().ref(postRef).set({owner: userData.email  , url});
      setHasImage(false);
      Toast.show({
        type: 'success',
        text1: 'Başarılı',
        text2: 'Resim başarıyla yüklendi',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Uyarı',
        text2: 'Resim yüklenemedi',
      });
    }
  };

  return (
    <View style={loginStyle.container}>
      <View style={{flex: 3, width: AppStyles.width}}>
        <Toast ref={ref => Toast.setRef(ref)} />
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={loginStyle.button}
          onPress={() => {
            openGallery();
          }}>
          <Text style={loginStyle.text}>Resim Seç</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 12}}>
        {hasImage ? (
          <>
            <Image
              source={imageUriGallary}
              style={{
                flex: 5,
                margin: 25,
                borderWidth: 1,
                borderColor: 'black',
              }}
            />
            <TouchableOpacity style={loginStyle.button} onPress={send}>
              <Text style={loginStyle.text}>Onayla</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
      <View style={loginStyle.block} />
    </View>
  );
};

export default Upload;
