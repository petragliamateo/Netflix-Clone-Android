import React from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Pressable,
} from 'react-native';

import styles from './faqsStyle';
import faqsData from '../../fixtures/faqs.json';
import Email from '../Email';
import { plus } from '../../../public/images';

export default function Faqs() {
  const [isShow, setIsShow] = React.useState([]);

  function handleSet(faq) {
    const allFaqs = [];
    for (let i = 0; i <= faqsData.length; i += 1) {
      allFaqs.push(false);
    }
    if (isShow[faqsData.indexOf(faq)]) {
      setIsShow(allFaqs);
      return;
    }
    allFaqs[faqsData.indexOf(faq)] = true;
    setIsShow(allFaqs);
  }

  return (
    <ScrollView style={styles.inner}>
      <Text style={styles.title}>Preguntas frecuentes</Text>
      {faqsData.map((faq) => (
        <View key={faq.id} style={styles.item}>
          <TouchableOpacity>
            <Pressable style={styles.header} onPress={() => handleSet(faq)}>
              <Text style={styles.headerTitle}>{faq.header}</Text>
              {isShow[faqsData.indexOf(faq)] ? (
                <Image
                  source={{ uri: 'https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg' }}
                  style={{ width: 15, height: 15, transform: [{ rotate: '45deg' }] }}
                />
              ) : (
                <Image
                  source={{ uri: plus }}
                  style={{ width: 15, height: 15 }}
                />
              )}
            </Pressable>
          </TouchableOpacity>

          <View>
            <Text style={isShow[faqsData.indexOf(faq)] ? styles.text : styles.hidden}>
              {faq.body}
            </Text>
          </View>

        </View>
      ))}

      <Email />
    </ScrollView>
  );
}
