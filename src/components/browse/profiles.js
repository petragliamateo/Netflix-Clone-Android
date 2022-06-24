import {
  Text, View, Image, ScrollView, Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import styles from './browseStyle';
import LogoImage from '../LogoImage';
import { userImages, edit, add } from '../../../public/images';
import { ProfileContext } from '../../context.profile';

export function SelectProfile({ user, setProfile }) {
  const { userData, setUserData } = useContext(ProfileContext);
  const navigation = useNavigation();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const userNames = user.displayName.split('-').filter((str) => str);
    const userPhotos = user.photoURL.split('-').filter((str) => str);
    const data = [];
    for (let i = 0; i < userNames.length; i += 1) {
      data.push({ name: userNames[i], photo: userPhotos[i], id: i });
    }
    setUserData((prev) => (prev !== data ? data : null));

    console.log(userData);
  }, [userData.length]);

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerBrowseItems} />
        <LogoImage />
        <Pressable onPress={() => setIsEditMode((prev) => !prev)}>
          <LogoImage
            src={edit}
            width={30}
            height={30}
          />
        </Pressable>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.title}>¿Quién está viendo ahora?</Text>

        <View style={styles.list}>

          {userData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.user}
              onPress={() => {
                if (isEditMode) {
                  setProfile({
                    displayName: item.name, photoURL: item.photo, id: item.id, isNew: false,
                  });
                  navigation.navigate('AddUser');
                } else {
                  setProfile({ displayName: item.name, photoURL: item.photo, id: item.id });
                }
              }}
            >
              <LogoImage
                src={isEditMode ? edit : userImages[item.photo]}
                width={80}
                height={80}
                radius={3}
              />
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          ))}

          {userData.length <= 5 && (
          <Pressable
            style={styles.user}
            onPress={() => {
              setProfile({
                displayName: '', photoURL: 0, id: userData.length + 1, isNew: true,
              });
              navigation.navigate('AddUser');
            }}
          >
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
