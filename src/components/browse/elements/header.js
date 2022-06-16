import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  logoN, userImages, search, cast,
} from '../../../../public/images';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';

function TopHeader({ profile }) {
  const navigation = useNavigation();

  return (
    <View style={styles.topHeader}>
      <LogoImage src={logoN} width={21} height={40} />
      <View style={styles.topHeaderItems}>
        <Text>
          <LogoImage src={cast} width={20} height={15} />
        </Text>

        <Text onPress={() => navigation.navigate('Search')}>
          <LogoImage src={search} width={20} height={20} />
        </Text>

        <Text onPress={() => navigation.navigate('ProfileSetup')}>
          <LogoImage src={userImages[profile.photoURL]} width={20} height={20} radius={5} />
        </Text>

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
