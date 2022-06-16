import React from 'react';
import {
  Text, View, ImageBackground,
} from 'react-native';
import styles from './headerStyle';
import Email from '../Email';

export default function Header({ navigation }) {
  return (
    <View style={styles.inner}>
      <ImageBackground
        source={{ uri: 'https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/0109117b-d54d-4600-84bb-d88212068f06/AR-es-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg' }}
        imageStyle={styles.bg}
      >

        <View style={styles.main}>
          <Text style={styles.title}>Películas y series ilimitadas y mucho más.</Text>
          <Text style={styles.subTitle}>Disfruta donde quieras. Cancela cuando quieras.</Text>
          <Email navigation={navigation} />
        </View>

      </ImageBackground>
    </View>

  );
}
