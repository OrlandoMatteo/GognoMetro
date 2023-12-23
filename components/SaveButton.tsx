import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export const SaveButton = ({ onPress }) =>  {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});