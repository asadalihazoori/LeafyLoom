import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { fontStyle } from '../theme/fonstStyle'

const LightButton = ({ title, onPress = () => { }, marginTop }) => {
    return (
        <View style={{ marginTop: marginTop }}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={[fontStyle.regular16, styles.Text]}>{title ? title : 'Demo'}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default LightButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightGreen,
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
        // flex:1

    },

    Text: {
        color: colors.primaryGreen,
    },
})