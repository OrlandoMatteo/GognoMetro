import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

type UserProps = {
    name: string;
  };
  export const HeaderName = (props:UserProps) => {
    return (
            <Text style={styles.titleStyle}>Ciao {props.name}</Text>
    );
};

  const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'left',
    },
});