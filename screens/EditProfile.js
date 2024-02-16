import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../constants/theme'
import * as ImagePicker from 'expo-image-picker'

const EditProfile = ({ navigation }) => {

    const [selectedImage, setSelectedImage] = useState('https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=')

    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })
        console.log(result)
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
        }
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile