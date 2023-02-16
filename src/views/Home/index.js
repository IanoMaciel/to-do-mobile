import React from 'react';
import { View, Text } from 'react-native';

// estilos
import styles from './styles';

// componentes
import MainHeader from '../../components/MainHeader';

const Home = () => {
    return(
        <View style={styles.container}>
           <MainHeader showNotification={true} showBack={false}/>
        </View>
    );
}

export default Home;