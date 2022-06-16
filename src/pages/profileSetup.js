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
    fontSize: '18px',
    fontWeight: '500',
    height: '100%',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: '800px',
    marginHorizontal: 'auto',
    padding: '20px',
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
    marginTop: '20px',
    marginHorizontal: '3px',
    display: 'flex',
    maxWidth: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#999999',
    fontSize: '12px',
    margin: '5px',
  },
  nameSelected: {
    color: '#ffffff',
    fontSize: '12px',
    margin: '5px',
  },
  text: {
    color: '#dddddd',
    marginVertical: '10px',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '18px',
    fontWeight: '500',
    color: '#dddddd',
    marginHorizontal: '20px',
  },
  menu: {
    marginBottom: '10px',
  },
  myList: {
    marginBottom: '10px',
    borderBottomColor: '#666666',
    borderBottomWidth: '1px',
    paddingBottom: '5px'
  }
});

export default function ProfileSetup() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const navigation = useNavigation();
  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.perfiles}>
        <View style={styles.list}>
          <Text
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            onPressIn
          >
            <View style={true ? {borderWidth: '2px', borderColor: '#ffffff'} : {}}>
              <LogoImage src={userImages[user.photoURL]} width={true ? 50 : 40} height={50} radius={3} />
            </View>
            <Text style={true ? styles.nameSelected : styles.name}>{user.displayName}</Text>
          </Text>

          <Text
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            onPressIn
          >
            <View style={false ? {borderWidth: '2px', borderColor: '#ffffff'} : {}}>
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

      <Text style={styles.menuContainer}>
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
      </Text>
    </View>
  );
}
