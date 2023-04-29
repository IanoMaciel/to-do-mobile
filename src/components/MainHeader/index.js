import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import back from '../../assets/back.png'
import bell from '../../assets/bell.png';
// icons
import logo from '../../assets/logo.png';
import qrcode from '../../assets/qrcode.png';
// estilos
import styles from './styles';

const MainHeader = ({ showNotification, showBack, late, pressNotification }) => {
    return(
        <View style={styles.header}>
            {
                showBack ?
                <TouchableOpacity style={styles.qrcode}>
                    <Image source={back} style={styles.qrcodeImage}/>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.qrcode}>
                    <Image source={qrcode} style={styles.qrcodeImage}/>
                </TouchableOpacity>
            }
            <Image source={logo}  style={styles.logo}/>
            {
                showNotification && late > 0 &&
                <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                    <Image source={bell} style={styles.notificationImage}/>
                    <View style={styles.notificationCircle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
};

export default MainHeader;