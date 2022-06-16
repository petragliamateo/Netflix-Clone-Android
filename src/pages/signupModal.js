/* eslint-disable no-nested-ternary */
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormContext } from '../context.form';

import stylesGlobal from '../../styleGlobal';
import styles from '../components/form/signup/formStyle';

export default function SignupModal({ navigation }) {
  const { form, setForm } = React.useContext(FormContext);
  const isEmailValid = form.email.length >= 5 && form.email.indexOf('@') !== -1;
  const handleSubmit = (event) => {
    event.preventDefault();
    navigation.navigate('Signup');
  };

  return (
    <View style={stylesGlobal.bodyWhite}>
      <View style={styles.container}>

        <Text style={styles.subTitle}>
          ¿Quieres ver Netflix ya?
        </Text>
        <Text style={{
          color: '#000000',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: '400',
        }}
        >
          Ingresa tu email para crear una cuenta de Netflix o iniciar sesión en la tuya.
        </Text>

        <TextInput
          style={
            !form.email ? styles.input : isEmailValid ? styles.inputValid : styles.inputInvalid
          }
          placeholder="Email o número de teléfono"
          value={form.email}
          onChange={({ target }) => setForm((prev) => ({ ...prev, email: target.value }))}
        />
        <Text style={styles.textInvalid}>
          {(!isEmailValid && form.email) && 'Ingresa una dirección de email válida.'}
        </Text>

        <Text
          style={styles.button}
          onPress={isEmailValid ? handleSubmit : ''}
        >
          COMIENZA YA
        </Text>
      </View>
    </View>
  );
}
