import {
  View, StyleSheet, TextInput, Pressable, Text, ScrollView,
} from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FirebaseContext } from '../context.firebase';
import { userImages } from '../../public/images';
import LogoImage from '../components/LogoImage';
import { ProfileContext } from '../context.profile';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
    padding: 20,
  },
  imageSlides: {
    alignSelf: 'center', marginVertical: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  flecha: { color: '#ffffff', fontSize: 32, margin: 10 },
  input: {
    width: '70%',
    color: '#ffffff',
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 5,
    padding: 7,
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#222222',
    height: 50,
    borderRadius: 5,
    width: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function AddUser() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(ProfileContext);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userNames = user.displayName.split('-').filter((str) => str);
    const userPhotos = user.photoURL.split('-').filter((str) => str);
    const data = [];
    for (let i = 0; i < userNames.length; i += 1) {
      data.push({ name: userNames[i], photo: userPhotos[i], id: i });
    }
    setUserData(data);
  }, []);

  function addUser(isNew) {
    // If is new --> add user, else edit user.
    if (isNew) {
      setUserData((prev) => prev.push(
        { name: profile.displayName, photo: profile.photoURL, id: prev.length + 1 },
      ));
    }

    let name = '';
    let photo = '';
    userData.forEach((item) => {
      if (item.id !== profile.id) {
        name += `${item.name}-`;
        photo += `${item.photo}-`;
      } else {
        name += `${profile.displayName}-`;
        photo += `${profile.photoURL}-`;
      }
    });
    user.updateProfile({ displayName: name, photoURL: photo });
    setProfile({});
    navigation.navigate('Browse');
  }

  function deleteUser() {
    let name = '';
    let photo = '';
    userData.forEach((item) => {
      if (item.id !== profile.id) {
        name += `${item.name}-`;
        photo += `${item.photo}-`;
      }
    });
    user.updateProfile({ displayName: name, photoURL: photo });
    setProfile({});
    navigation.navigate('Browse');
  }

  return (
    <ScrollView style={styles.container}>

      <View
        style={styles.imageSlides}
      >
        <Pressable
          onPress={() => setProfile((prev) => (
            { ...prev, photoURL: prev.photoURL > 0 ? prev.photoURL - 1 : 5 }
          ))}
          style={{ alignSelf: 'center', marginVertical: 20 }}
        >
          <Text style={styles.flecha}>{'<'}</Text>
        </Pressable>

        <LogoImage src={userImages[profile.photoURL]} width={120} height={120} radius={4} />

        <Pressable
          onPress={() => setProfile((prev) => (
            { ...prev, photoURL: prev.photoURL < 5 ? prev.photoURL + 1 : 0 }
          ))}
          style={{ alignSelf: 'center', marginVertical: 20 }}
        >
          <Text style={styles.flecha}>{'>'}</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.input}
        value={profile.displayName}
        onChangeText={(text) => setProfile((prev) => ({ ...prev, displayName: text }))}
        placeholder="Nombre de perfil"
      />

      <Pressable
        onPress={() => (profile.displayName ? addUser(profile.isNew) : null)}
        style={styles.button}
      >
        <Text style={{ color: profile.displayName ? 'green' : '#cccccc' }}>{profile.isNew ? 'Crear' : 'Guardar'}</Text>
      </Pressable>

      <Pressable
        onPress={() => deleteUser()}
        style={styles.button}
      >
        <Text style={{ color: 'red' }}>Delete</Text>
      </Pressable>
    </ScrollView>
  );
}
