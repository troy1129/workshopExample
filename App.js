import React,{useContext} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity} from 'react-native';
import  MainNavigation  from './pages/Navigation/MainNavigation';
import {MovieProvider} from './context/MovieContext';



export default function App() {
  return (
  <MovieProvider>
   <MainNavigation/>
  </MovieProvider>
  );
}
