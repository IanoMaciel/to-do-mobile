import React from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

// estilos
import styles from './styles';

// icons
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png'

const MainHeader = ({showNotification, showBack}) => {
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
                showNotification &&
                <TouchableOpacity style={styles.notification}>
                    <Image source={bell} style={styles.notificationImage}/>
                    <View style={styles.notificationCircle}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
};

export default MainHeader;