import {
  Text, View, Image, ScrollView, Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';
import styles from './browseStyle';
import LogoImage from '../LogoImage';
import { userImages, edit, add } from '../../../public/images';

export function SelectProfile({ user, setProfile }) {
  const [userData, setUserData] = useState([]);

  function addUser() {
    setUserData((prev) => prev.push({ name: 'user', photo: Math.floor(Math.random() * 6) }));
    let name = '';
    let photo = '';
    userData.forEach((item) => {
      name += `${item.name}-`;
      photo += `${item.photo}-`;
    });
    console.log(name, photo);
    user.updateProfile({ displayName: name, photoURL: photo });
  }

  useEffect(() => {
    const userNames = user.displayName.split('-').filter((str) => str);
    const userPhotos = user.photoURL.split('-').filter((str) => str);
    const data = [];
    for (let i = 0; i < userNames.length; i += 1) {
      data.push({ name: userNames[i], photo: userPhotos[i], id: i });
    }
    setUserData(data);
    console.log('useEffect');
  }, []);

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

      <ScrollView style={styles.container}>
        <Text style={styles.title}>¿Quién está viendo ahora?</Text>

        <View style={styles.list}>

          {userData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.user}
              onPress={() => setProfile({ displayName: item.name, photoURL: item.photo })}
            >
              <LogoImage src={userImages[item.photo]} width={80} height={80} radius={3} />
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          ))}

          {userData.length <= 5 && (
          <Pressable style={styles.user} onPress={() => addUser()}>
            <Image
              source={{ uri: add }}
              style={{ width: 80, height: 80 }}
            />
            <Text style={styles.name}>Añadir perfil</Text>
          </Pressable>
          )}
        </View>

      </ScrollView>
    </ScrollView>
  );
}
