import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';


import Zomato from './Zomato.js';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>


        <ScrollView style={{ flex: 1, backgroundColor: 'pink', margin: 10 }}>
        <Zomato />
        </ScrollView>


      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },

});

export default App;