import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#20295f',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26'
    },

    logo: {
        width: 100,
        height:30
    },

    notification: {
        position: 'absolute',
        right: 20
    },

    notificationImage: {
        width: 30,
        height: 30
    },

    notificationCircle: {
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',

        position: 'absolute',
        left: 13,
        bottom: 13
    },
    notificationText: {
        fontWeight: 'bold',
        color: '#EE6B26'
    },
    qrcode: {
        position: 'absolute',
        left: 20
    },
    qrcodeImage: {
        width: 30,
        height: 30
    }
});

export default styles;