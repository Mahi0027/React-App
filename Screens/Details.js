import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, BackHandler } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyle } from '../Styles/Global'
import EditProduct from './EditProduct'

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [people, setPeople] = useState([
      {name: 'Asadsadsakd;aks;ld', age: '10', mobile: '32432432', key: '1'},
      {name: 'B', age: '10', mobile: '32432432', key: '2'},
      {name: 'C', age: '10', mobile: '32432432', key: '3'},
      {name: 'D', age: '10', mobile: '32432432', key: '4'},
      {name: 'E', age: '10', mobile: '32432432', key: '5'},
      {name: 'F', age: '10', mobile: '32432432', key: '6'},
      {name: 'G', age: '10', mobile: '32432432', key: '7'},
      {name: 'H', age: '10', mobile: '32432432', key: '8'},
    ]);

    const modalPopup = () => {
        setModalOpen(true);
    }
    return (
      <View style={styles.details}>
        <Modal visible={modalOpen} animationType='slide'>
            <MaterialIcons 
                name= 'close'
                size= {24}
                style={globalStyle.modalToggle}
                onPress={() => setModalOpen(false)}
            />
            <EditProduct />
        </Modal>
        <FlatList 
          data={people}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.content1}>
                <View style={styles.heading}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.data}>
                  <View style={styles.content2}>
                    <View style={styles.img}>
                      <Image style={styles.img} source = {require('../Sources/Images/mahi.jpg')} />
                    </View>
                    <View style={styles.description}>
                      <View style={styles.content3}>
                        <View style={styles.desc}>
                          <Text>{item.age}</Text>
                          <Text>{item.mobile}</Text>
                        </View>
                        <View style={styles.changes}>
                          <Text style={styles.icons}>
                            <MaterialIcons 
                                name= 'update'
                                size= {35}
                                style={styles.update}
                                onPress={modalPopup}
                            /><Text>       </Text>
                            <MaterialIcons 
                                name= 'remove'
                                size= {35}
                                style={styles.remove}
                            />
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        /> 
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    details: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: 400,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 0.0,
      borderColor: '#000',
      padding: 10,
      margin: 20,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,  
      elevation: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content1: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    content2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    content3: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    heading: {
      width: 400,
      height: 40,
      // borderColor: 'black',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    data: {
      width: 400,
      height: 145,
      // borderColor: 'black',
      // borderWidth: 1,
    },
    name: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons : {
      marginLeft: 170,
    },
    img: {
      width: 100,
      height: 140,
      marginLeft: 5,
      // borderColor: 'black',
      // borderWidth: 1,
    },
    description: {
      width: 280,
      height: 145,
      // borderColor: 'black',
      // borderWidth: 1,
    },
    desc: {
      width: 280,
      height: 100,
      // borderColor: 'black',
      // borderWidth: 1,
      paddingTop: 5,
      paddingLeft: 20,
    },
    changes: {
      width: 280,
      height: 45,
      // borderColor: 'black',
      // borderWidth: 1,
    }
  });
  