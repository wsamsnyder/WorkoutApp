import * as React from 'react'
import {StyleSheet, Pressable} from 'react-native'
import {Machine} from '../types/machine'

import {View, Text} from './Themed'

interface Props {
    machine: Machine
}

export const MachineListItem = ({machine}: Props) => {
    const {back, seat, optional} = machine.settings
    const {weight, reps} = machine.previous

    return (
        <Pressable onPress={() => alert(machine.id)} style={styles.machine}>
            <Text style={styles.title}>{machine.title}</Text>
            <View style={styles.info}>
                <View style={styles.settings}>
                    <Text style={styles.header}>Seat Settings: </Text>
                    <Text>Back: {`${back}`}</Text>
                    <Text>Seat: {`${seat}`}</Text>
                    {optional && <Text>Optional: {`${optional}`}</Text>}
                </View>
                <View style={styles.prev}>
                    <Text style={styles.header}>Previous Workout: </Text>
                    <Text>Weight: {`${weight}`}</Text>
                    <Text>Reps: {`${reps}`}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    machine: {
        backgroundColor: '#C0C0C0',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 32,
    },
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#C0C0C0',
    },
    settings: {
        alignSelf: 'flex-start',
        backgroundColor: '#C0C0C0',
    },
    prev: {
        backgroundColor: '#C0C0C0',
        alignSelf: 'flex-end',
    },
    header: {
        fontWeight: 'bold',
    },
})
