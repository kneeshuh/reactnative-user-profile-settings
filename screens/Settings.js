import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'


const SettingsScreen = ({ navigation }) => {

    const navigateToEditProfile = () => {
        navigation.navigate('EditProfile')
    }

    const navigateToSecurity = () => {
        console.log('Security function')
    }

    const navigateToNotifications = () => {
        console.log('Notifications function')
    }

    const navigateToPrivacy = () => {
        console.log('Privacy function')
    }

    const accountItems = [
        {icon: 'person-outline', text: 'Edit Profile', action: navigateToEditProfile},
        // {icon: 'security', text: 'Security', action: navigateToSecurity},
        // {icon: 'notifications-none', text: 'Notifications', action: navigateToNotifications},
        // {icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy},
    ];

    const renderSettingsItem = ({ icon, text, action }) => {
        <TouchableOpacity onPress={action} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingLeft: 12}}>
            <MaterialIcons name={icon} size={24} color='black'/>
            <Text style={{ marginLeft: 36, fontWeight: 600, fontSize: 16 }}>{text}</Text>
        </TouchableOpacity>
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View style={{
                marginHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}
                >
                    <MaterialIcons 
                        name='keyboard-arrow-left'
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                    <Text>Settings</Text>
            </View>
            <ScrollView style={{marginHorizontal: 12}}>

            <View style={{
                marginBottom: 12
            }}>
                <Text style={{
                    marginVertical: 10
                }}>Account</Text>
                <View style={{
                    borderRadius: 12,
                }}> 
                    <MaterialIcons 
                        name='person-outline'
                        size={24}
                        color='black'
                        onPress={navigateToEditProfile}
                    ></MaterialIcons>
                    <Text>Edit Profile</Text>

                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsScreen