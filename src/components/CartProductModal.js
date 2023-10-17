import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontStyle } from '../theme/fonstStyle'
import { colors } from '../theme/colors'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'

const CartProductModal = ({ onPress }) => {
    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <View style={styles.imageView}>

                    <SvgXml xml={icons.product1} />
                    {/* <View></View> */}

                </View>


                <View style={styles.textView} >

                    <View>

                        <Text style={fontStyle.regular18_700}>Rubber Fig Plant</Text>
                        <Text style={[fontStyle.regular18_700, { color: colors.primaryGreen, lineHeight: 30 }]}>$99</Text>
                        <View style={styles.updateView}>

                            <View style={styles.incrementView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.touchableView}>

                                        <SvgXml xml={icons.decrementIcon} />
                                    </TouchableOpacity>

                                    <Text style={[fontStyle.regular14_700, { marginHorizontal: 16 }]}>3</Text>
                                    <TouchableOpacity style={styles.touchableView}>

                                        <SvgXml xml={icons.incrementIcon} />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <TouchableOpacity style={styles.touchableView} onPress={onPress}>

                                <SvgXml xml={icons.trashIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartProductModal

const styles = StyleSheet.create({
    container: {
        // borderWidth: 0.3,
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 16,
        marginBottom: 24,

        elevation: 4, // This controls the shadow depth
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 60,

    },

    innerContainer: {
        // borderWidth: 1,
        flexDirection: 'row'
    },
    textView: {
        // borderWidth: 1,
        marginLeft: 16,
        justifyContent: 'center',
        flex: 1,
    },

    updateView: {
        // borderWidth: 1,
        borderColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    incrementView: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        // borderWidth: 1,
        backgroundColor: colors.backgroundSilver1,
        borderRadius: 100,

    },

    touchableView: {
        // borderWidth: 1,
        justifyContent: 'center'
    },
    imageView: {
        // borderWidth: 1,
        backgroundColor: colors.backgroundSilver1,
        borderRadius: 16,
        // padding: 60

    }
})