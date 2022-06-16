import {
  Text, View, TextInput,
} from 'react-native';
import React from 'react';
import { FormContext } from '../../../context.form';
import styles from './formStyle';

export default function Form({
  handleSignin,
}) {
  const { form, setForm } = React.useContext(FormContext);
  const [focus, setFocus] = React.useState({ focusEmail: false, focusPassword: false });
  const isInvalid = form.password === '' || form.email === '';

  return (
    <View style={styles.container}>
      <Text style={form.error ? styles.error : { display: 'hidden' }}>{form.error}</Text>
      <TextInput
        style={focus.focusEmail ? styles.inputFocus : styles.input}
        placeholder="Email o número de teléfono"
        value={form.email}
        onChange={({ target }) => setForm((prev) => ({ ...prev, email: target.value }))}
        onFocus={() => setFocus({ focusEmail: true, focusPassword: false })}
      />
      <TextInput
        secureTextEntry
        style={focus.focusPassword ? styles.inputFocus : styles.input}
        placeholder="Contraseña"
        value={form.password}
        onChange={({ target }) => setForm((prev) => ({ ...prev, password: target.value }))}
        onFocus={() => setFocus({ focusEmail: false, focusPassword: true })}
      />
      <Text
        style={isInvalid ? styles.button : styles.buttonValid}
        onPress={isInvalid ? '' : handleSignin}
      >
        {form.loading ? 'Loading..' : 'Iniciar sesión'}
      </Text>
      <Text style={styles.text}>
        ¿Necesitas ayuda?
      </Text>
      <Text style={styles.subTitle} onPress={() => navigation.navigate('Home')}>
        ¿Primera vez en Netflix? Suscríbete ya.
      </Text>
      <Text style={styles.textSmall}>
        El inicio de sesión está protegido por Google reCaptcha para comprobar que no eres un robot.
      </Text>
    </View>
  );
}
