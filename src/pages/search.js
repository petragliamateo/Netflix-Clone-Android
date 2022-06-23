import { useState, useEffect } from 'react';
import {
  Text, TextInput, View, StyleSheet, ScrollView, Pressable,
} from 'react-native';
import { useContent } from '../hooks';
import { search } from '../../public/images';
import LogoImage from '../components/LogoImage';
import getImage from '../../public/images/getImage';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000000',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#353535',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    marginBottom: 3,
    backgroundColor: '#222222',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 16,
    width: 150,
    textAlign: 'left',
    marginLeft: 15,
  },
});

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { series } = useContent('series');
  const { films } = useContent('films');
  const [catalogoState, setCatalogoState] = useState([]);
  const [catalogoSearched, setCatalogoSearched] = useState([]);

  useEffect(() => {
    const catalogo = [
      ...series.map((serie) => ({ ...serie, type: 'series' })),
      ...films.map((film) => ({ ...film, type: 'films' })),
    ];
    if (catalogo.length >= 50) {
      for (let i = 0; i <= 49; i += 1) {
        const random = Math.floor(Math.random() * catalogo.length);
        const temp = catalogo[i];
        catalogo[i] = catalogo[random];
        catalogo[random] = temp;
      }
      setCatalogoState(catalogo);
      setCatalogoSearched(catalogo);
    }
  }, [series, films]);

  useEffect(() => {
    const formatted = searchTerm.toLowerCase();
    const filtered = catalogoState.filter((item) => (
      item.title.toLowerCase().includes(formatted)
      || item.genre.toLowerCase().includes(formatted)
      || item.type.toLowerCase().includes(formatted)
    ));
    setCatalogoSearched(filtered);
  }, [searchTerm]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <LogoImage src={search} width={15} height={15} />
        <TextInput
          style={{ width: '100%', color: '#888888', marginHorizontal: 10 }}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Buscar una serie, una peli, un género.."
        />
      </View>

      <Text style={{
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        marginVertical: 15,
        paddingHorizontal: 5,
        width: '100%',
        textAlign: 'left',
      }}
      >
        {searchTerm ? 'Principales resultados' : 'Los más buscados'}
      </Text>

      <ScrollView>
        {catalogoSearched.map((item) => (
          <Pressable key={item.id} style={styles.item}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <LogoImage src={getImage(item.type, item.genre, item.slug, 'large')} width={150} height={70} radius={3} />
              <Text style={styles.itemText}>
                {item.title}
              </Text>
            </View>
            <Text style={{ color: '#ffffff', marginRight: 15, fontSize: 22 }}>{'>'}</Text>
          </Pressable>
        ))}
      </ScrollView>

    </ScrollView>
  );
}
