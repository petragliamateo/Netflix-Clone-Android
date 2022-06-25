import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View, Image } from 'react-native';
import {
  Home, Signin, Browse, Signup, SignupModal, ProfileSetup, Search, AddUser
} from './pages';
import styles from '../styleGlobal';
import LogoImage from './components/LogoImage';
import { useAuth } from './hooks';
import { cast, userImages } from '../public/images';
import LoadingScreen from './components/browse/LoadingScreen';
import { ProfileContext } from './context.profile';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const user = useAuth();
  const { profile } = React.useContext(ProfileContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LoadingScreen'}>
        
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={Home}
        />
        <Stack.Screen
          name="LoadingScreen"
          options={{
            headerShown: false
          }}
          component={LoadingScreen}
        />
        <Stack.Screen
          name="Signin"
          options={{
            headerTitle: () => <LogoImage width={100} />,
            headerStyle: styles.navigate,
            headerShadowVisible: false,
            headerTintColor: '#fff',
          }}
          component={Signin}
        />
        <Stack.Screen
          name="Signup"
          options={{
            header: () => <HeaderSignup />,
          }}
          component={Signup}
        />
        <Stack.Screen
          name="Browse"
          options={{
            headerShown: false
          }}
          component={Browse}
        />

        <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
          <Stack.Screen
            name="SignupModal"
            options={{
              headerTitle: '',
              headerShadowVisible: false,
            }}
            component={SignupModal}
          />
          <Stack.Screen
            name="ProfileSetup"
            options={{
              headerTitle: 'Perfiles y más',
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000000',
              }
            }}
            component={ProfileSetup}
          />
          <Stack.Screen
            name="AddUser"
            options={{
              headerTitle: 'Añadir usuario',
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000000',
              }
            }}
            component={AddUser}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerRight: () => (
                <View style={{
                  display: 'flex', flexDirection: 'row', margin: 15, width: 60, justifyContent: 'space-between'
                }}>
                  <LogoImage src={cast} width={25} height={20} />
                  <LogoImage src={userImages[profile.photoURL]} width={20} height={20} radius={5} />
                </View>
              ),
              headerTitle: '',
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000000',
              }
            }}
            component={Search}
          />
        </Stack.Group>
        {/*
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HeaderSignup() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerSignup}>
      <LogoImage width={100} />

      <View style={styles.headerButtonsContainer}>
        <Text style={styles.headerButtons}>AYUDA</Text>
        <Text style={styles.headerButtons} onPress={() => navigation.navigate('Signin')}>INICIAR SESIÓN</Text>
      </View>
    </View>
  );
}
