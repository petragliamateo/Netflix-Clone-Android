import React from 'react';
import { View } from 'react-native';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selectionFilter';
import BrowseComponent from '../components/browse';
import styles from '../../styleGlobal';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return (
    <View style={styles.body}>
      <BrowseComponent slides={slides} />
    </View>
  );
}
