import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeObject = async (key: string, value: unknown) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.error('Object-set error: ', e)
    }
}

export const getObject = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@key')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        console.error('Object-get error: ', e)
    }
}
