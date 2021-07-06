import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeString = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.error('String-set error: ', e)
    }
}

export const getString = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        } else {
            console.error('String value does not exist')
            return null
        }
    } catch (e) {
        console.error('String-get error: ', e)
    }
}
