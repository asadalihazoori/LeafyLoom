import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'

const LineSeparator = ({ title }) => {
    return (
        <View style={styles.separateView}>
            <View style={styles.innerSeparatorView}>
                <View style={styles.lineView}>

                    <SvgXml xml={icons.lineDivider} style={styles.icon}/>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.orText}>{title}</Text>

                </View>
                <View style={styles.lineView}>
                    <SvgXml xml={icons.lineDivider} style={styles.icon} />
                </View>
            </View >

        </View>
    )
}

export default LineSeparator

const styles = StyleSheet.create({
    separateView: {
        padding: 10,
        // borderWidth: 1
    },

    innerSeparatorView: {
        // borderWidth: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // alignContent: 'space-between',

    },
    lineView: {
        // borderWidth: 1,
        // maxWidth: 20 
        flex: 1

    },
    textView: {
        // borderWidth: 1,
        marginHorizontal: 16
    },

    icon: {
        maxWidth: '100%', // Ensure the icon doesn't exceed the width of the innerView
        maxHeight: '100%', // Ensure the icon doesn't exceed the height of the innerView
    }
})