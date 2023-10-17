import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'
import { fontStyle } from '../theme/fonstStyle'
import FilterModal from './FilterModal'

const Search = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.container, {
            borderColor: isFocused ? colors.primaryGreen : 'transparent',
            backgroundColor: isFocused ? colors.transparentgreen : colors.grey50
        }]}>
            <View style={styles.iconView}>
                <SvgXml xml={isFocused ? icons.search.green : icons.search.grey} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={[fontStyle.regular14, styles.input, { fontWeight: '400', }]}
                    placeholder='Search'
                    placeholderTextColor={colors.grey400}
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => setIsFocused(false)}

                />

            </View>
            <TouchableOpacity style={[styles.iconView, { marginLeft: 12 }]} onPress={() => setModalVisible(!modalVisible)}>
                <SvgXml xml={isFocused ? icons.filter.green : icons.filter.grey} />
            </TouchableOpacity>

            <FilterModal
                modalVisible={modalVisible} setModalVisible={setModalVisible}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 18,
        borderWidth: 1,
        marginVertical: 24,

    },
    iconView: {
        // borderWidth: 1,
        justifyContent: 'center'
    },
    inputView: {
        // borderWidth: 1,
        flex: 1,
        marginLeft: 12,

    },

    input: {
        padding: 0,
    }

})