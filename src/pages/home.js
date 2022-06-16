import React from 'react';
import { ScrollView } from 'react-native';
import {
  Jumbotron, Footer, Faqs, Header,
} from '../components';
import styleGlobal from '../../styleGlobal';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styleGlobal.body}>
      <Header navigation={navigation} />
      <Jumbotron />
      <Faqs />
      <Footer />
    </ScrollView>
  );
}
