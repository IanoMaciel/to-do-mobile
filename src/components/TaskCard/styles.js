import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '90%',
        height: 80,
        padding: 10,
        marginTop: 15,

        //borderWidth: 1,
        borderRadius: 5,
        borderColor: '#B0B0B0',
        backgroundColor: '#FFDFC5'

    },

    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    cardLeftImage: {
        width: 50,
        height: 50
    },

    cardLeftText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 7
    },

    cardRight: {
        alignItems: 'flex-end',
    },
    cardRightDate: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardRightHour: {
        fontWeight: 'bold',
        color: '#707070'
    },
    cardDone: {
        opacity: 0.3
    }

});

export default styles;