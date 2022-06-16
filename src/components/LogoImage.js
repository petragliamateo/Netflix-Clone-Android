import React from 'react';
import { Image } from 'react-native';

export default function LogoImage({
  width = 100, height, radius = 0, src = 'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png',
}) {
  // Imagen de logo es de 3500 x 946 pxs.
  const heights = height || (width * 945) / 3500;
  return (
    <Image
      style={{ width, height: heights, borderRadius: radius }}
      source={{ uri: src }}
    />
  );
}
