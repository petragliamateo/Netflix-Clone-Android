import { useState } from 'react';
import {
  Text, TextInput, View, StyleSheet,
} from 'react-native';
import { search } from '../../public/images';
import LogoImage from '../components/LogoImage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '500',
    height: '100%',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: '800px',
    marginHorizontal: 'auto',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: '#353535',
  },
});

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <LogoImage src={search} width={15} height={15} />
        <TextInput
          style={{ width: '100%', color: '#888888', marginHorizontal: '10px' }}
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Buscar una serie, una peli, un género.."
        />
      </View>

      <Text style={{
        fontSize: '18px',
        fontWeight: '500',
        color: '#ffffff',
        marginVertical: '15px',
        paddingHorizontal: '5px',
        width: '100%',
        textAlign: 'left',
      }}
      >
        {searchTerm ? 'Principales resultados' : 'Los más buscados'}
      </Text>

      <View />
    </View>
  );
}
