/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  View, Text,
} from 'react-native';
import styles from './footerStyle';

export default function Footer() {
  const linksArray = ['Preguntas frecuentes', 'Centro de ayuda', 'Cuenta',
    'Prensa', 'Relaciones con inversionistas', 'Empleo', 'Formas de ver', 'Términos de uso',
    'Privacidad', 'Preferencias de cookies', 'Información corporativa', 'Contáctanos',
    'Prueba de velocidad', 'Avisos legales', 'Solo en Netflix'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Preguntas? Llama al 0000 000 0000</Text>
      <Text style={styles.flex}>
        {linksArray.map((link) => (
          <Text style={styles.link} key={linksArray.indexOf(link)}>
            {link}
          </Text>
        ))}
      </Text>
      <Text style={styles.text}>Netflix Argentina</Text>
    </View>
  );
}
