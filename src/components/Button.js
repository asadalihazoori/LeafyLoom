import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { fontStyle } from '../theme/fonstStyle'

const Button = ({ title, onPress = () => { }, marginTop }) => {
    return (
        <View style={{ marginTop: marginTop }}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={fontStyle.regular16}>{title ? title : 'Demo'}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primaryGreen,
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
        // flex:1

    },

    signinText: {
        fontFamily: 'Urbanist',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        color: colors.white,
        letterSpacing: 0.2
    },
})