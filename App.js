/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import { firebase } from './src/lib/firebase';
import { FirebaseContext } from './src/context.firebase';
import { FormContext } from './src/context.form';
import { ProfileContext } from './src/context.profile';

import Navigations from './src/Navigations';

export default function App() {
  const [form, setForm] = React.useState({
    email: '', password: '', error: '', loading: false,
  });
  const [profile, setProfile] = React.useState({});
  const [userData, setUserData] = React.useState([]);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <FirebaseContext.Provider value={{ firebase }}>
        <ProfileContext.Provider value={{
          profile, setProfile, userData, setUserData,
        }}
        >
          <Navigations />
        </ProfileContext.Provider>
      </FirebaseContext.Provider>
    </FormContext.Provider>
  );
}
