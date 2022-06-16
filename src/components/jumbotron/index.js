import React from 'react';
import { Text, View, Image } from 'react-native';

import jumboData from '../../fixtures/jumbo.json';
import styles from './jumbotronStyle';

export default function Jumbotron() {
  return (
    <View style={styles.container}>

      {jumboData.map((item) => (
        <Text style={styles.inner} key={item.id}>

          <Text style={styles.item}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.subTitle}>
              {item.subTitle}
            </Text>
            <Image style={styles.images} source={{ uri: item.image }} />
            {item.video && <Text> Video </Text> }
          </Text>

        </Text>
      ))}

    </View>

  );
}
