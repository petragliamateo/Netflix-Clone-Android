import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Animated,
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
    <View style={styles.inner}>
      <Text style={styles.title}>Preguntas frecuentes</Text>
      {faqsData.map((faq) => (
        <View key={faq.id} style={styles.item}>
          <TouchableOpacity>
            <Text style={styles.header} onPress={() => handleSet(faq)}>
              {faq.header}
              {isShow[faqsData.indexOf(faq)] ? (
                <Image
                  source={{ uri: 'https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg' }}
                  style={{ width: '15px', height: '15px', transform: 'rotate(45deg)' }}
                />
              ) : (
                <Image
                  source={{ uri: plus }}
                  style={{ width: '15px', height: '15px' }}
                />
              )}
            </Text>
          </TouchableOpacity>

          <Animated.View>
            <Text style={isShow[faqsData.indexOf(faq)] ? styles.text : styles.hidden}>
              {faq.body}
            </Text>
          </Animated.View>

        </View>
      ))}

      <Email />
    </View>
  );
}
