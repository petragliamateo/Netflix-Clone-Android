import { Text, View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FirebaseContext } from '../context.firebase';
import { edit, userImages, check } from '../../public/images';
import LogoImage from '../components/LogoImage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '500',
    height: '100%',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
    padding: 20,
  },
  perfiles: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    marginTop: 20,
    marginHorizontal: 3,
    display: 'flex',
    maxWidth: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#999999',
    fontSize: 12,
    margin: 5,
  },
  nameSelected: {
    color: '#ffffff',
    fontSize: 12,
    margin: 5,
  },
  text: {
    color: '#dddddd',
    marginVertical: 10,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginHorizontal: 20,
  },
  menu: {
    fontSize: 18,
    fontWeight: '500',
    color: '#dddddd',
    marginBottom: 10,
  },
  myList: {
    fontSize: 18,
    fontWeight: '500',
    color: '#dddddd',
    marginBottom: 10,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    paddingBottom: 5
  }
});

export default function ProfileSetup() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.perfiles}>
        <View style={styles.list}>
          <Text
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
          >
            <View style={true ? {borderWidth: 2, borderColor: '#ffffff'} : {}}>
              <LogoImage src={userImages[user.photoURL]} width={true ? 50 : 40} height={50} radius={3} />
            </View>
            <Text style={true ? styles.nameSelected : styles.name}>{user.displayName}</Text>
          </Text>

          <Text
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
          >
            <View style={false ? {borderWidth: 2, borderColor: '#ffffff'} : {}}>
              <LogoImage src={userImages[user.photoURL]} width={false ? 50 : 40} height={40} radius={3} />
            </View>
            <Text style={false ? styles.nameSelected : styles.name}>{user.displayName}</Text>
          </Text>
        </View>

        <Text style={styles.text}>
          <LogoImage src={edit} width={15} height={15} />
          {'  Administrar perfiles'}
        </Text>

      </View>

      <View style={styles.menuContainer}>
        <Text style={styles.myList}>
          <LogoImage src={check} width={15} height={15} />
          {'  Mi lista'}
        </Text>
        <Text style={styles.menu}>Configuración de app</Text>
        <Text style={styles.menu}>Cuenta</Text>
        <Text style={styles.menu}>Ayuda</Text>
        <Text
          style={styles.menu}
          onPress={() => {
            firebase.auth().signOut()
              .then(
                navigation.navigate('Home')
              )
              .catch((error) => window.prompt(error.message))
          }}
        >
          Cerrar sesión
        </Text>
      </View>
    </View>
  );
}
