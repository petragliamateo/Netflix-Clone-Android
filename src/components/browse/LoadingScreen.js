import { Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import LogoImage from '../LogoImage';
import { useAuth } from '../../hooks';

export default function LoadingScreen() {
  const user = useAuth();
  const navigation = useNavigation();

  function autoNav() {
    if (!user) {
      navigation.navigate('Home');
    } else if (Object.entries(user).length >= 4) {
      navigation.navigate('Browse');
    }
  }

  useEffect(() => {
    navigation.addListener('focus', autoNav);
    autoNav();
  }, [user]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const stylesAn = {
    loading: {
      backgroundColor: '#000000',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeAnim,
    },
  };

  return (
    <Animated.View style={stylesAn.loading}>
      <LogoImage width={200} />
    </Animated.View>
  );
}
