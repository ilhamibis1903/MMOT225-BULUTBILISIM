/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
       <View style={styles.body}>
              <Text style={styles.sectionDescription}>AD SOYAD: İlhami İbiş </Text>
              <Text style={styles.sectionDescription}>YAŞ: 19</Text>
              <Text style={styles.sectionDescription}>MEMLEKET: ERZİNCAN</Text>
              <Text style={styles.sectionDescription}>LİSE: Eğitim Bilimleri Temel Lisesi</Text>
              <Text style={styles.sectionDescription}>ÜNİVERSİTE: Okan Üniversitesi</Text>
              <Text style={styles.sectionDescription}>İŞ DENEYİMİ: yok</Text>
            </View>
    </>
  );
};

const styles = StyleSheet.create({

  sectionDescription: {
    marginTop: 65,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '300',
    color: 'red',
  },
});

export default App;