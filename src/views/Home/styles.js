import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    
    filter: {
      flexDirection: 'row',
      width: '100%',
      height: 70,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    filterTextActived: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#EE6B26'
    },
    filterTextInative: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#20295f',
      opacity: 0.5
    }
});

export default styles;