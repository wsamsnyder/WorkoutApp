import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Open up the code for this screen:
                </Text>

                <View
                    style={[
                        styles.codeHighlightContainer,
                        styles.homeScreenFilename,
                    ]}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="rgba(0,0,0,0.05)"
                >
                    <MonoText>{path}</MonoText>
                </View>

                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Change any of the text, save the file, and your app will
                    automatically update. Even if I add more code?
                </Text>
            </View>

            <View style={styles.helpContainer}>
                <TouchableOpacity
                    onPress={handleHelpPress}
                    style={styles.helpLink}
                >
                    <Text
                        style={styles.helpLinkText}
                        lightColor={Colors.light.tint}
                    >
                        Tap here if your app doesn't automatically update after
                        making changes
                    </Text>
                </TouchableOpacity>
            </View>

            <Button
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ['red', 'pink'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
            />
        </View>
    )
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
    )
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'flex-end',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
})
