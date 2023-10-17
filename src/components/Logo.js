import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../assets/icons/icons'
import { SvgXml } from 'react-native-svg'
import { fontStyle } from '../theme/fonstStyle'

const Logo = () => {
    return (
        <View style={styles.container}>
            <SvgXml xml={icons.leafLogo} />
            <Text style={[fontStyle.regular48,]}>yLoom</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'red'

    }
})