import { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FirebaseContext } from '../context.firebase';

export default function useAuth() {
  const [user, setUser] = useState(async () => {
    const value = await AsyncStorage.getItem('authUser');
    return JSON.parse(value);
  });

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(async (authUser) => {
      if (authUser) {
        await AsyncStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        await AsyncStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return user;
}
