import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FirebaseContext } from '../context.firebase';
import { edit, userImages, check } from '../../public/images';
import LogoImage from '../components/LogoImage';
import { ProfileContext } from '../context.profile';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  const { profile, setProfile } = useContext(ProfileContext);
  
  const userNames = user.displayName.split('-').filter((str) => str);
  const userPhotos = user.photoURL.split('-').filter((str) => str);
  const { userData, setUserData } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <View style={styles.perfiles}>
        <View style={styles.list}>

          {userData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.user}
              onPress={() => setProfile({ displayName: item.name, photoURL: item.photo, id: item.id })}
            >
              {profile.id === item.id ? (
                <View>
                  <View style={{borderWidth: 2, borderColor: '#ffffff'}}>
                    <LogoImage src={userImages[item.photo]} width={50} height={50} radius={3} />
                  </View>
                  <Text style={styles.nameSelected}>{item.name}</Text>
                </View>
              ) : (
                <View>
                  <LogoImage src={userImages[item.photo]} width={40} height={40} radius={3} />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              )}
    
            </Pressable>
          ))}

        </View>

        <Text style={styles.text} onPress={() => {
          setProfile({});
          navigation.navigate('Browse');
        }}>
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
