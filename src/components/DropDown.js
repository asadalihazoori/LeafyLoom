import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../assets/icons/icons'
import { colors } from '../theme/colors'
import { fontStyle } from '../theme/fonstStyle'
import SelectDropdown from 'react-native-select-dropdown'
import { SvgXml } from 'react-native-svg'

const DropDown = ({ data, onSelect, value }) => {

    return (
        <View>
            <SelectDropdown
                buttonStyle={{
                    marginTop: 14,
                    // borderWidth: 1,
                    borderRadius: 16,
                    backgroundColor: colors.grey50,
                    width: '100%',
                    height: 60,
                }}

                dropdownStyle={{
                    borderRadius: 16,
                }}

                buttonTextStyle={[fontStyle.regular14, {
                    color: value ? colors.grey900 : colors.grey500,
                    textAlign: 'left'
                }]}
                data={data}
                defaultButtonText='Gender'
                onSelect={onSelect}

                rowTextStyle={fontStyle.regular14}


                renderDropdownIcon={() => (
                    <SvgXml xml={value ? icons.dropdown.black : icons.dropdown.grey} style={{ marginRight: 20 }} />
                )}

                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({})