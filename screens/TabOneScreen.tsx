import * as React from 'react'
import {Button} from 'react-native'
import {StyleSheet} from 'react-native'

import {getString, removeValue, storeString} from '../localStorage'

import {Text, View} from '../components/Themed'

export default function TabOneScreen() {
    const handleSave = () => {
        const data = 'a test string lololol'
        storeString('firstString', data)
    }

    const handleRestore = async () => {
        const data = await getString('firstString')
        alert(data)
    }

    const handleDelete = async () => {
        await removeValue('firstString')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View>
                <Button title="click to save" onPress={handleSave} />
                <Button title="click to alert" onPress={handleRestore} />
                <Button title="click to Delete" onPress={handleDelete} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
