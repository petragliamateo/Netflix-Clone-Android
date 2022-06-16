import React from 'react';
import { View } from 'react-native';
import { FirebaseContext } from '../context.firebase';
import { FormContext } from '../context.form';

import styles from '../../styleGlobal';
import FormUp from '../components/form/signup';

export default function Signup({ navigation }) {
  const { firebase } = React.useContext(FirebaseContext);
  const { form, setForm } = React.useContext(FormContext);

  const handleSignup = (event) => {
    event.preventDefault();
    setForm((prev) => ({ ...prev, loading: true }));

    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((result) => result.user
        .updateProfile({
          displayName: 'user',
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(() => {
          navigation.navigate('Browse');
          setForm((prev) => ({ ...prev, loading: false }));
        }))
      .catch((error) => {
        setForm({
          email: '', password: '', error: error.message, loading: false,
        });
      });
  };

  return (
    <View style={styles.bodyWhite}>
      <FormUp handleSignup={handleSignup} />
    </View>
  );
}
