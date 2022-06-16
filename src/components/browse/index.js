/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { View } from 'react-native';
import { useContext, useState, useEffect } from 'react';

import { SelectProfile } from './profiles';
import { FirebaseContext } from '../../context.firebase';
import LoadingScreen from './LoadingScreen';
import BrowsePage from './elements';

export default function BrowseComponent({ slides }) {
  const [category, setCategory] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [profile, setProfile] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(category === '' ? [...slides.series, ...slides.films] : slides[category]);
  }, [slides, category]);

  return (profile.displayName ? (
    loadingScreen ? (
      <LoadingScreen />
    ) : <BrowsePage profile={profile} slideRows={slideRows} setCategory={setCategory} category={category} />
  ) : (
    user.displayName ? (
      <View>
        <SelectProfile user={user} setProfile={setProfile} />
      </View>
    ) : (
      <LoadingScreen />
    )
  )
  );
}
