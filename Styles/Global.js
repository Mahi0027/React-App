import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: 400,
        marginBottom: 50,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#76B7F6'
    },
    button: {
        width: 420,
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    forgetpassword: {
        width: 400,
        alignItems: 'stretch',
        flexDirection: 'row',
        textAlign: 'left',
    },
    signup: {
        width: 400,
        alignItems: 'stretch',
        flexDirection: 'row',
        textAlign: 'right',
        paddingBottom: 5,
    },
    modalToggle: {
        marginBottom: 50,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        paddingLeft: 2,
        alignSelf: 'center'
    },
    age: {
        width: 400,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        color: '#898A8A',
        fontWeight: '100',
    }
  });