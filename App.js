import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SectionCom from './Components/SectionCom';

export default function App() {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'gray',
    }}>
      <Header/>
      <SectionCom/>
      <Footer/>
      <StatusBar style= "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
