import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: 70,

        position: 'absolute',
        bottom: 0,

        backgroundColor: '#20295f',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',

        alignItems: 'center',
    },
    
    button: {
        position: 'relative',
        top: -35
    },

    buttonImage: {
        width: 85,
        height: 85
    },

    title: {
        position: 'relative',
        top: -35,

        color: '#fff'
    }
});

export default styles;