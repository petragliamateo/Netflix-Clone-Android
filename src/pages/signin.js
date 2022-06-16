import React from 'react';
import { View } from 'react-native';
import { FirebaseContext } from '../context.firebase';
import { FormContext } from '../context.form';

import styles from '../../styleGlobal';
import FormIn from '../components/form/signin';

export default function Signin({ navigation }) {
  const { firebase } = React.useContext(FirebaseContext);
  const { form, setForm } = React.useContext(FormContext);

  const handleSignin = (event) => {
    event.preventDefault();
    setForm((prev) => ({ ...prev, loading: true }));

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        navigation.navigate('Browse');
        setForm((prev) => ({ ...prev, loading: false }));
      })
      .catch((error) => {
        setForm({
          email: '', password: '', error: error.message, loading: false,
        });
      });
  };

  return (
    <View style={styles.body}>
      <FormIn handleSignin={handleSignin} navigation={navigation} />
    </View>
  );
}
