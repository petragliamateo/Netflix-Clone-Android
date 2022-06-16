import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  Jumbotron, Footer, Faqs, Header,
} from '../components';
import styleGlobal from '../../styleGlobal';
import LogoImage from '../components/LogoImage';
import { logoN } from '../../public/images';

export default function Home({ navigation }) {
  return (
    <ScrollView
      style={styleGlobal.body}
      stickyHeaderIndices={[0]}
    >
      <HeaderHome navigation={navigation} />
      <Header navigation={navigation} />
      <Jumbotron />
      <Faqs />
      <Footer />
    </ScrollView>
  );
}

function HeaderHome({ navigation }) {
  return (
    <View style={styleGlobal.headerHome}>
      <LogoImage
        src={logoN}
        width={21} height={40}
      />

      <View style={styleGlobal.headerButtonsContainer}>
        <Text style={styleGlobal.headerButtonsWhite}>PRIVACIDAD</Text>
        <Text style={styleGlobal.headerButtonsWhite} onPress={() => navigation.navigate('Signin')}>INICIAR SESIÓN</Text>
        <Text style={styleGlobal.headerButtons}>...</Text>
      </View>
    </View>
  );
}
