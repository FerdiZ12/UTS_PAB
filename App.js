import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Screen imports
import BerandaScreen from './src/screens/BerandaScreen';
import DetailScreen from './src/screens/DetailScreen';
import PemesananScreen from './src/screens/PemesananScreen';
import CariScreen from './src/screens/CariScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black',
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={BerandaScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      /><Tab.Screen
        name="Cari"
        component={CariScreen}
        options={{
          tabBarLabel: 'Cari',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Create theme config to disable SSRProvider
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

// App component with Navigation
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'black',
          }}
        >
          {/* TabNavigator does not need a header */}
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }} // Hide header for the tab navigator
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Pemesanan" component={PemesananScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
