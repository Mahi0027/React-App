import { StatusBar } from 'expo-status-bar';
import  React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Button, Picker } from 'react-native';
import { globalStyle } from '../Styles/Global'
import { TextInput } from 'react-native-gesture-handler';

export default function Registration() {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('')

    const changeName = (val) => {
        setName(val);
    }
    const changeUserName = (val) => {
        setNsetUserNameame(val);
    }
    const changeEmail = (val) => {
        setEmail(val);
    }
    const changeMobile = (val) => {
        setMobile(val);
    }
    const changeAge = (val) => {
        setAge(val);
    }
    const changePassword = (val) => {
        setPassword(val);
    }
    const changeConfirmPassword = (val) => {
        setConfirmPassword(val);
    }
    const changeImage = (val) => {
        setImage(val);
    }
    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyle.container}>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Name...'
                        onChange={changeName}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Username...'
                        onChange={changeUserName}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Email...'
                        onChange={changeEmail}
                    />
                </View>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        style ={globalStyle.input}
                        placeholder = 'Mobile...'
                        onChange={changeMobile}
                    />
                </View>
                <View>
                    <Picker
                        selectedValue = {age}
                        style={globalStyle.age}
                        onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
                    >
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                    </Picker>
                </View>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        style ={globalStyle.input}
                        placeholder = 'Age...'
                        onChange={changeAge}
                    />
                </View>
                <View>
                    <TextInput 
                        secureTextEntry={true}
                        style ={globalStyle.input}
                        placeholder = 'Password...'
                        onChange={changePassword}
                    />
                </View>
                <View>
                    <TextInput 
                        secureTextEntry={true}
                        style ={globalStyle.input}
                        placeholder = 'ConfirmPassword...'
                        onChange={changeConfirmPassword}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'File...'
                        onChange={changeImage}
                    />
                </View>
                <View style ={globalStyle.button}>
                    <Button onPress={() => console.log(title)} title='Registration' color='#76B7F6'/>
                </View>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}