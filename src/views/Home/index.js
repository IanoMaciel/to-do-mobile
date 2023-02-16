import React from 'react';
import { View, Text } from 'react-native';

// estilos
import styles from './styles';

// componentes
import MainHeader from '../../components/MainHeader';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <View style={styles.container}>
           <MainHeader showNotification={true} showBack={false}/>
           <Footer icon={'save'}/>
        </View>
    );
}

export default Home;