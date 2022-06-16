import { Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import LogoImage from '../LogoImage';

export default function LoadingScreen() {
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
