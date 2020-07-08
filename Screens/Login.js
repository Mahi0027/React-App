import { StatusBar } from 'expo-status-bar';
import  React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Button, Modal } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { globalStyle } from '../Styles/Global'
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import Registration from './Registration'

export default function Login({ navigation }) {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [modalOpen, setModalOpen] = useState(false)
    const changeUserName = (val) => {
        setUserName(val);
    }
    const changePassword = (val) => {
        setPassword(val);
    }
    const modalPopup = () => {
        setModalOpen(true);
    }
    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyle.container}>
                <Modal visible={modalOpen} animationType='slide'>
                    <MaterialIcons 
                        name= 'close'
                        size= {24}
                        style={globalStyle.modalToggle} 
                        onPress={() => setModalOpen(false)}
                    />
                    <Registration />
                </Modal>
                {/* <Headers /> */}
                    <View>
                        <TextInput 
                            style ={globalStyle.input}
                            placeholder = 'Email/Mobile...'
                            onChange={changeUserName}
                        />
                    </View>
                    <View>
                        <TextInput 
                            secureTextEntry={true}
                            style ={globalStyle.input}
                            placeholder = 'Password...'
                            onChange={setPassword}
                        />
                    </View>
                    <View style ={globalStyle.button}>
                        <Button onPress={() => console.log(title)} title='Login' color='#76B7F6' onPress={() => navigation.navigate('Details')}/>
                    </View>
                    <View>
                        <Text style={globalStyle.forgetpassword}>Forget Password?                                                                 <Text style={globalStyle.signup} onPress={modalPopup}>Sign Up</Text></Text>
                        
                    </View>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}
