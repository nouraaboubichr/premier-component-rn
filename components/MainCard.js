import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainCard({ text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EDEFEE',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  text: { fontSize: 18, color: '#333', textAlign: 'center' },
});
