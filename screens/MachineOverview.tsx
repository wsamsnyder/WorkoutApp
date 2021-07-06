import * as React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {MachineListItem} from '../components/MachineListItem'

import {Text, View} from '../components/Themed'
import {Machine} from '../types/machine'

interface Item {
    item: Machine
}

const thirtyMinMachines = [
    {
        id: '30Min:1',
        title: 'Chest Press',
        settings: {
            back: 1,
            seat: 1,
        },
        previous: {
            weight: 10,
            reps: 10,
        },
    },
    {
        id: '30Min:2',
        title: 'Leg Press',
        settings: {
            back: 2,
            seat: 2,
        },
        previous: {
            weight: 11,
            reps: 11,
        },
    },
    {
        id: '30Min:3',
        title: 'Lat Pulldown',
        settings: {
            back: 3,
            seat: 3,
        },
        previous: {
            weight: 12,
            reps: 12,
        },
    },
    {
        id: '30Min:4',
        title: 'Leg Extensions',
        settings: {
            back: 4,
            seat: 4,
        },
        previous: {
            weight: 13,
            reps: 13,
        },
    },
    {
        id: '30Min:5',
        title: 'Back Rows',
        settings: {
            back: 5,
            seat: 5,
        },
        previous: {
            weight: 14,
            reps: 14,
        },
    },
    {
        id: '30Min:6',
        title: 'Shoulder Press',
        settings: {
            back: 6,
            seat: 6,
        },
        previous: {
            weight: 15,
            reps: 15,
        },
    },
    {
        id: '30Min:7',
        title: 'Leg Curl',
        settings: {
            back: 7,
            seat: 7,
        },
        previous: {
            weight: 16,
            reps: 16,
        },
    },
    {
        id: '30Min:8',
        title: 'Biceps Curls',
        settings: {
            back: 8,
            seat: 8,
        },
        previous: {
            weight: 17,
            reps: 17,
        },
    },
    {
        id: '30Min:9',
        title: 'Triceps',
        settings: {
            back: 9,
            seat: 9,
        },
        previous: {
            weight: 18,
            reps: 18,
        },
    },
    {
        id: '30Min:10',
        title: 'Abdominal Crunch',
        settings: {
            back: 10,
            seat: 10,
        },
        previous: {
            weight: 19,
            reps: 19,
        },
    },
]

export const MachineOverview = () => {
    const getMachines = () => {
        return thirtyMinMachines
    }

    const renderItem = ({item}: Item) => (
        <View>
            <MachineListItem machine={item} />
        </View>
    )

    return (
        <View>
            <FlatList
                data={getMachines()}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

// const styles = StyleSheet.create({})
