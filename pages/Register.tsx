import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SaveButton } from '../components/SaveButton';
export const Register = ({ onLoginSuccess }) => {
    const [username, setName] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleNameChange = (text: string) => {
        setName(text);
        setIsButtonDisabled(false);
    };

    const handleSaveName = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            console.log('Name saved:', username);
        } catch (error) {
            console.log('Error saving username:', error);
        }
        //once registered, go to the Home page Screen
        onLoginSuccess();
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={handleNameChange} style={styles.text}
            />
            <SaveButton onPress={handleSaveName} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});