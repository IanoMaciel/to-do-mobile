import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      imageIcons: {
        width: 45,
        height: 45,

        marginHorizontal: 3
      },
      label: {
        color: '#707070',
        fontSize: 18,
        
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5,
      },
      input: {
        width: '90%',

        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',

        fontSize: 16,
        paddingHorizontal: 10,
        marginHorizontal: 19
      },
      inputArea: {
        width: '90%',

        borderWidth: 1,
        borderColor: '#EE6B26',
        borderRadius: 5,

        fontSize: 16,
        paddingHorizontal: 10,
        marginHorizontal: 19,
        height: 100,
        textAlign: 'center',
      },
      inputInLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 19
      }, 
      inLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      switchLabel: {
        fontWeight: 'bold',
        color: '#EE6B26', // -> # EE6B26
        fontSize: 16,
      },
      removeLabel: {
        fontWeight: 'bold',
        color: '#20295f', // -> # EE6B26
        fontSize: 16,
        marginRight: 19
      }
})

export default styles

