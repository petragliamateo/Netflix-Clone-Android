import {
  Pressable, Modal, Text, StyleSheet,
} from 'react-native';
import { useState } from 'react';

import LogoImage from '../../LogoImage';
import getImage from '../../../../public/images/getImage';

const styles = StyleSheet.create({
  card: {
    margin: '5px',
  },
  ventana: {
    marginHorizontal: 20,
    marginVertical: 'auto',
    backgroundColor: '#252525',
    padding: '20px',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function Card({ content, type, width = 100 }) {
  const [showFeature, setShowFeature] = useState(false);
  const {
    title, genre, slug, maturity, description,
  } = content;

  return (
    <Pressable
      onPress={() => setShowFeature((prev) => !prev)}
      style={styles.card}
    >
      <LogoImage src={getImage(type, genre, slug, 'small')} width={width} height={width * 1.5} radius={3} />

      <Modal
        visible={showFeature}
        transparent
        onRequestClose={() => setShowFeature((prev) => !prev)}
      >
        <Pressable style={styles.ventana}>
          <LogoImage src={getImage(type, genre, slug, 'large')} width={300} height={150} radius={3} />
          <Text
            style={{
              color: '#ffffff', fontSize: '18px', width: '100%', textAlign: 'left', marginTop: '10px',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: '#cccccc', fontSize: '12px', width: '100%', textAlign: 'left', marginVertical: '10px',
            }}
          >
            {`${maturity}+  ${genre}`}
          </Text>
          <Text
            style={{
              color: '#ffffff', fontSize: '14px', width: '100%', textAlign: 'left', marginBottom: '5px',
            }}
          >
            {description}
          </Text>
        </Pressable>
      </Modal>
    </Pressable>
  );
}
