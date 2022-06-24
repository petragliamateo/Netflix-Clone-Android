import {
  Text, View, TextInput, Pressable,
} from 'react-native';
import React from 'react';
import { FormContext } from '../../../context.form';
import styles from './formStyle';
import { useNavigation } from '@react-navigation/native';

export default function Form({
  handleSignin,
}) {
  const { form, setForm } = React.useContext(FormContext);
  const [focus, setFocus] = React.useState({ focusEmail: false, focusPassword: false });
  const isInvalid = form.password === '' || form.email === '';
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={form.error ? styles.error : { display: 'none' }}>{form.error}</Text>
      <TextInput
        style={focus.focusEmail ? styles.inputFocus : styles.input}
        placeholder="Email o número de teléfono"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        onFocus={() => setFocus({ focusEmail: true, focusPassword: false })}
      />
      <TextInput
        secureTextEntry
        style={focus.focusPassword ? styles.inputFocus : styles.input}
        placeholder="Contraseña"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        onFocus={() => setFocus({ focusEmail: false, focusPassword: true })}
      />
      <Pressable
        style={isInvalid ? styles.button : styles.buttonValid}
        onPress={isInvalid ? null : handleSignin}
      >
        <Text style={styles.buttonText}>{form.loading ? 'Loading..' : 'Iniciar sesión'}</Text>
      </Pressable>
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
