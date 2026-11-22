import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter({ appName = 'MonApp' }) {
  const year = new Date().getFullYear();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {year} {appName} – All rights reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F4CE14', paddingVertical: 12, paddingHorizontal: 16 },
  text: { fontSize: 14, color: 'black', textAlign: 'center' },
});
