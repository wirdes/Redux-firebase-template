import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import database from '@react-native-firebase/database';
import {SearchBar} from 'react-native-elements';

const Posts = ({owner, url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.product_container}>
        <Text numberOfLines={1} style={styles.username}>
          {
            /* {owner.length < 50 ? `${owner}` : `${owner.substring(0, 32)}...`} */ owner
          }
        </Text>
        <Image
          style={styles.product_image}
          source={{
            uri: url,
          }}
        />
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const renderItem = ({item}) => <Posts url={item.url} owner={item.owner} />;
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const func = async () => {
    const onValueChange = await database().ref(`/posts`).once('value');
    const data2 = onValueChange._snapshot.value;
    const result = Object.values(data2);
    setData(result);
  };
  useEffect(() => func(), []);
  console.log(data);
  return (
    <>
      <SearchBar
        round
        placeholder="Arama"
        onChangeText={setSearch}
        value={search}
        lightTheme="true"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
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

export default HomeScreen;
