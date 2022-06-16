import { Text, View } from 'react-native';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';
import { plus, info, play } from '../../../../public/images';
import Card from './card';

export default function Main({ randomItem, type }) {
  return (
    <Text style={styles.mainContainer}>

      <Card content={randomItem} type={type} width={200} />

      <Text style={styles.mainCategory}>
        <Text>{randomItem.title}</Text>
        <Text style={styles.dot} />
        <Text>{randomItem.genre}</Text>
        <Text style={styles.dot} />
        <Text>{`${randomItem.maturity}+`}</Text>
      </Text>

      <View style={styles.mainButtonsContainer}>
        <View style={styles.iconsButton}>
          <LogoImage src={plus} width={15} height={15} />
          <Text style={{ paddingTop: '7px' }}>Mi Lista</Text>
        </View>

        <View style={styles.playButton}>
          <LogoImage src={play} width={15} height={15} />
          <Text>Reproducir</Text>
        </View>

        <View style={styles.iconsButton}>
          <LogoImage src={info} width={25} height={25} />
          <Text>Información</Text>
        </View>
      </View>
    </Text>
  );
}
