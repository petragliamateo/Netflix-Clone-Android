/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  View, Text, TextInput,
} from 'react-native';

import { FormContext } from '../../context.form';

import styles from './emailStyle';

export default function Email({ navigation }) {
  const { form, setForm } = React.useContext(FormContext);
  const title = '¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChange={({ target }) => setForm((prev) => ({ ...prev, email: target.value }))}
      />
      <Text style={styles.button} onPress={() => navigation.navigate('SignupModal')}>
        <Text>Comenzar  {'>'}</Text>
      </Text>
    </View>
  );
}
