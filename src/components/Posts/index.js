import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Posts.style';

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

export {Posts};
