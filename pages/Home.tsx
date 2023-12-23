import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderName } from '../components/HeaderName';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const getUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                if (storedUsername !== null) {
                    setUsername(storedUsername);
                }
            } catch (error) {
                console.log('Error retrieving username from AsyncStorage:', error);
            }
        };

        getUsername();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderName name={username} />
        </View>
    );
};

// style for the Title of the page
// Bold text, size 30, aligned to the left
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});
  