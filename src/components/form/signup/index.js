/* eslint-disable no-nested-ternary */
import {
  Text, View, TextInput,
} from 'react-native';
import React from 'react';
import { FormContext } from '../../../context.form';
import styles from './formStyle';

export default function Form({
  handleSignup,
}) {
  const { form, setForm } = React.useContext(FormContext);
  const isEmailValid = form.email.length >= 5 && form.email.indexOf('@') !== -1;
  const isPasswordValid = form.password.length >= 6 || form.passwordlength <= 60;
  const isValid = isEmailValid && isPasswordValid;

  return (
    <View style={styles.container}>

      <Text style={styles.subTitle}>
        ¿Todo listo para disfrutar series y películas ilimitadas?
      </Text>
      <Text style={styles.text}>
        Crea una cuenta para obtener más información sobre Netflix
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

      <TextInput
        secureTextEntry
        style={
          !form.password ? styles.input : isPasswordValid ? styles.inputValid : styles.inputInvalid
        }
        placeholder="Contraseña"
        value={form.password}
        onChange={({ target }) => setForm((prev) => ({ ...prev, password: target.value }))}
      />
      <Text style={styles.textInvalid}>
        {(!isPasswordValid && form.password) && 'La contraseña debe tener entre 6 y 60 caracteres.'}
      </Text>

      <Text
        style={styles.button}
        onPress={isValid ? handleSignup : ''}
      >
        {form.loading ? 'Loading..' : 'Continuar'}
      </Text>
    </View>
  );
}
