import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'
import { fontStyle } from '../theme/fonstStyle'
import { useNavigation } from '@react-navigation/native'

const MainHeader = ({ title, icon }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topView}>
            <View style={styles.backView}>
                <View style={styles.iconView}>
                    <SvgXml xml={icons.logoHeader} />

                </View>
                {title &&
                    <View style={styles.textView}>
                        <Text style={fontStyle.regular24}>{title}</Text>
                    </View>
                }

                {icon &&
                    <TouchableOpacity onPress={() => { }} style={[styles.iconView, { marginLeft: 12 }]}>
                        {/* <SvgXml xml={icons.searchHeader} /> */}
                        <SvgXml xml={icon} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default MainHeader;

const styles = StyleSheet.create({

    topView: {
        // paddingVertical: 12,
        height: 48,
        // padding: 12px 0px;
        // alignItems: 'center',
        // alignSelf: 'stretch',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // alignContent: 'center',

        // borderWidth: 1,
        // borderColor: 'red',
        // paddingVertical: 12

    },
    backView: {
        // borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'red',

        // height: 28,
        width: '100%',
        // alignItems: 'center'
        // justifyContent: 'center',
        // backgroundColor: 'red',
        // flex:1


    },

    iconView: {
        // justifyContent: 'center',
        // flex:1,
        // height: 28,
        // width: 28,
        // borderWidth: 1,
        borderColor: 'red',
        // alignItems: 'center',
        justifyContent: 'center'

    },

    textView: {
        // borderWidth: 1,
        marginLeft: 12,
        flex: 1
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center'
    }


})