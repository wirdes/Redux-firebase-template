import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import database from '@react-native-firebase/database';
import {SearchBar} from 'react-native-elements';
import {Posts} from '../../../components/Posts';

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

export default HomeScreen;
