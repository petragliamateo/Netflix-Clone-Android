import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import Card from './card';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: '#ffffff',
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
});

export default function CardContainer({ set, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{set.title}</Text>
      <ScrollView horizontal style={{ paddingLeft: 5 }}>
        {
          set.data.map((item) => (
            <View key={`${item.genre}-${item.title.toLowerCase()}`}>
              <Card content={item} type={type} />
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}
