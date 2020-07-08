import { StatusBar } from 'expo-status-bar';
import  React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Button, Picker } from 'react-native';
import { globalStyle } from '../Styles/Global'
import { TextInput } from 'react-native-gesture-handler';

export default function Registration() {
    const [product, setProduct] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [processor, setProcessor] = useState('');
    const [ram, setRam] = useState('');
    const [screensize, setScreensize] = useState('');
    const [color, setColor] = useState('');
    const [hdcapacity, setHdcapacity] = useState('')

    const changeproduct = (val) => {
        setProduct(val);
    }
    const changeimage = (val) => {
        setImage(val);
    }
    const changedesc = (val) => {
        setDesc(val);
    }
    const changeProcessor = (val) => {
        setProcessor(val);
    }
    const changeRam = (val) => {
        setRam(val);
    }
    const changeScreensize = (val) => {
        setScreensize(val);
    }
    const changeColor = (val) => {
        setColor(val);
    }
    const changeHdcapacity = (val) => {
        setHdcapacity(val);
    }
    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyle.container}>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Product Name...'
                        onChange={changeproduct}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Image...'
                        onChange={changeimage}
                    />
                </View>
                <View>
                    <Picker
                        selectedValue = {type}
                        style={globalStyle.age}
                        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                    >
                    <Picker.Item label="Mobile" value="Mobile" />
                    <Picker.Item label="Laptop" value="Laptop" />
                    </Picker>
                </View>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        style ={globalStyle.input}
                        placeholder = 'Processor...'
                        onChange={changeProcessor}
                    />
                </View>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        secureTextEntry={true}
                        style ={globalStyle.input}
                        placeholder = 'Ram...'
                        onChange={changeRam}
                    />
                </View>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        secureTextEntry={true}
                        style ={globalStyle.input}
                        placeholder = 'ScreenSize...'
                        onChange={changeScreensize}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'Color...'
                        onChange={changeColor}
                    />
                </View>
                <View>
                    <TextInput 
                        style ={globalStyle.input}
                        placeholder = 'HD Capacity...'
                        onChange={changeHdcapacity}
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