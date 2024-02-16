import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../constants/theme'
import * as ImagePicker from 'expo-image-picker'
import DatePicker, { getFormatedDate} from 'react-native-modern-datepicker'

const EditProfile = ({ navigation }) => {

    const [selectedImage, setSelectedImage] = useState('https://ca.slack-edge.com/T01KPE0QGCD-U066LHAETEY-75fb8e20c73d-512')

    const [name, setName] = useState('Ni Gettings')
    const [email, setEmail] = useState('ni.gettings@gmail.com')
    const [password, setPassword] = useState('password')
    const [country, setCountry] = useState('England')

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false)
    const today = new Date()
    const startDate = getFormatedDate(
        today.setDate(today.getDate() + 1),
        'DD/MM/YYYY'
    )
    const [selectedStartDate, setSelectedStartDate] = useState('01/01/1990')
    const [startedDate, setStartedDate] = useState('16/02/2024')

    const handleChangeStartDate = (propDate) => {
        setStartedDate(propDate)
    }
    
    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker)
    }

    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
        }
    }

    function renderDatePicker() {
        return (<Modal
            animationType='slide'
            transparent={true}
            visible={openStartDatePicker}
        >
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    margin: 20,
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    padding: 35,
                    width: '90%',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5
                }}>
                    <DatePicker
                        mode='calendar'
                        minimumDate={startDate}
                        selected={startedDate}
                        onDateChange={handleChangeStartDate}
                        onSelectedChange={(date) => setSelectedStartDate(date)}
                        options={{
                            backgroundColor: colors.primary,
                            textHeaderColor: '#469ab6',
                            textDefaultColor: 'white',
                            selectedTextColor: 'white',
                            mainColor: '#469ab6',
                            textSecondaryColor: 'white',
                            borderColor: 'rgba(122, 1246, 165, 0.1)'
                        }} />
                        <TouchableOpacity onPress={handleOnPressStartDate}>
                            <Text>Close</Text>
                        </TouchableOpacity>

                </View>
            </View>
        </Modal>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 22
        }}>
            <View style={{
                marginHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    position: 'absolute',
                    left: 0
                }}>
                    <MaterialIcons name='keyboard-arrow-left' size={24} color='black'/>
                </TouchableOpacity>
                <Text>Edit Profile</Text>
            </View>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    marginVertical: 22
                }}>
                    <TouchableOpacity onPress={handleImageSelection}>
                        <Image source={{ uri: selectedImage }} style={{ height: 170, width: 170, borderRadius: 85, borderWidth: 2, borderColor: colors.primary }}/>
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            zIndex: 9999
                        }}>
                            <MaterialIcons 
                                name='photo-camera'
                                size={32}
                                color={colors.primary}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 6}}>
                    <Text>Name</Text>
                    <View style={{ height: 44, width: '100%', borderRadius: 4, borderColor: 'gray', borderWidth: 1, marginVertical: 6, justifyContent: 'center', paddingLeft: 8 }}><TextInput value={name} onChangeText={value => setName(value)} editable={true}></TextInput></View>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 6}}>
                    <Text>Email</Text>
                    <View style={{ height: 44, width: '100%', borderRadius: 4, borderColor: 'gray', borderWidth: 1, marginVertical: 6, justifyContent: 'center', paddingLeft: 8 }}><TextInput value={email} onChangeText={value => setEmail(value)} editable={true}></TextInput></View>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 6}}>
                    <Text>Password</Text>
                    <View style={{ height: 44, width: '100%', borderRadius: 4, borderColor: 'gray', borderWidth: 1, marginVertical: 6, justifyContent: 'center', paddingLeft: 8 }}><TextInput value={password} onChangeText={value => setPassword(value)} editable={true} secureTextEntry></TextInput></View>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 6}}>
                    <Text>Date of Birth</Text>
                    <TouchableOpacity onPress={handleOnPressStartDate} style={{
                        height: 44,
                        width: '100%',
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: 'center',
                        paddingLeft: 8
                    }}>
                        <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', marginBottom: 6}}>
                    <Text>Country</Text>
                    <View style={{ height: 44, width: '100%', borderRadius: 4, borderColor: 'gray', borderWidth: 1, marginVertical: 6, justifyContent: 'center', paddingLeft: 8 }}><TextInput value={country} onChangeText={value => setCountry(value)} editable={true}></TextInput></View>
                </View>
            {renderDatePicker()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile