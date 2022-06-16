import {
  Text, View, Image, ScrollView, Pressable,
} from 'react-native';
import styles from './browseStyle';
import LogoImage from '../LogoImage';
import { userImages, edit, add } from '../../../public/images';

export function SelectProfile({ user, setProfile }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerBrowseItems} />
        <LogoImage style={styles.headerBrowseItems} />
        <LogoImage
          style={styles.headerBrowseItems}
          src={edit}
          width={30}
          height={30}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>¿Quién está viendo ahora?</Text>

        <View style={styles.list}>
          <Pressable
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
          >
            <LogoImage src={userImages[user.photoURL]} width={80} height={80} radius={3} />
            <Text style={styles.name}>{user.displayName}</Text>
          </Pressable>

          <View style={styles.user}>
            <LogoImage src={`${userImages[1]}`} width={80} height={80} radius={3} />
            <Text style={styles.name}>nombre</Text>
          </View>
          <View style={styles.user}>
            <LogoImage src={`${userImages[2]}`} width={80} height={80} radius={3} />
            <Text style={styles.name}>nombre</Text>
          </View>

          <View style={styles.user}>
            <Image
              source={{ uri: add }}
              style={{ width: 80, height: 80 }}
            />
            <Text style={styles.name}>Añadir perfil</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
