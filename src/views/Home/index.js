import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


export default function Home() {
    return(
        <View style={styles.contatiner}>
            <Text>Você está na tela HOME</Text>
        </View>
    );
}