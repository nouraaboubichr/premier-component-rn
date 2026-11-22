import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MainCard from './components/MainCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppHeader />
        <View style={styles.content}>
          <MainCard text="Contenu principal de l’application" />
        </View>
        <AppFooter appName="MonApp" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#495E57' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
