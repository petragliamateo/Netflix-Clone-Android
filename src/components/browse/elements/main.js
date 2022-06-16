import { Text, View } from 'react-native';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';
import { plus, info, play } from '../../../../public/images';
import Card from './card';

export default function Main({ randomItem, type }) {
  return (
    <View style={styles.mainContainer}>

      <Card content={randomItem} type={type} width={200} />

      <View style={styles.mainCategory}>
        <Text style={styles.mainText}>{randomItem.title}</Text>
        <Text style={styles.dot} />
        <Text style={styles.mainText}>{randomItem.genre}</Text>
        <Text style={styles.dot} />
        <Text style={styles.mainText}>{`${randomItem.maturity}+`}</Text>
      </View>

      <View style={styles.mainButtonsContainer}>
        <View style={styles.iconsButton}>
          <LogoImage src={plus} width={15} height={15} />
          <Text style={{ paddingTop: 7, color: '#ffffff' }}>Mi Lista</Text>
        </View>

        <View style={styles.playButton}>
          <LogoImage src={play} width={15} height={15} />
          <Text>Reproducir</Text>
        </View>

        <View style={styles.iconsButton}>
          <LogoImage src={info} width={25} height={25} />
          <Text style={{ color: '#ffffff' }}>Información</Text>
        </View>
      </View>
    </View>
  );
}
