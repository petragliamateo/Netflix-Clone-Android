/* eslint-disable react/jsx-one-expression-per-line */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, TextInput, Pressable,
} from 'react-native';

import { FormContext } from '../../context.form';

import styles from './emailStyle';

export default function Email() {
  const { form, setForm } = React.useContext(FormContext);
  const navigation = useNavigation();

  const title = '¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('SignupModal')}>
        <Text style={styles.buttonText}>Comenzar  {'>'}</Text>
      </Pressable>
    </View>
  );
}
