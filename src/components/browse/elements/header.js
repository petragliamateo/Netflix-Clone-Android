import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  userImages, search, cast, logoN,
} from '../../../../public/images';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';

function TopHeader({ profile }) {
  const navigation = useNavigation();

  return (
    <View style={styles.topHeader}>
      <LogoImage src={logoN} width={21} height={40} />
      <View style={styles.topHeaderItems}>
        <Pressable>
          <LogoImage src={cast} width={20} height={15} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Search')}>
          <LogoImage src={search} width={20} height={20} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ProfileSetup')}>
          <LogoImage src={userImages[profile.photoURL]} width={20} height={20} radius={5} />
        </Pressable>

      </View>
    </View>
  );
}

function BotHeader({ setCategory }) {
  return (
    <View style={styles.botHeader}>
      <Text style={styles.botHeaderItems} onPress={() => setCategory('series')}>
        Series
      </Text>
      <Text style={styles.botHeaderItems} onPress={() => setCategory('films')}>
        Películas
      </Text>
      <Text style={styles.botHeaderItems}>Categorías</Text>
    </View>
  );
}

export { BotHeader, TopHeader };
