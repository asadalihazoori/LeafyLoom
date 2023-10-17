import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontStyle } from '../theme/fonstStyle'
import { colors } from '../theme/colors'
import { SvgXml } from 'react-native-svg'
// import { icons } from '../assets/icons/icons'

const CategoryBar = ({ data, icon }) => {
    const handelPress = (id) => {
        // console.log(id);

    };

    return (
        <ScrollView style={styles.categoryView} horizontal={true} showsHorizontalScrollIndicator={false}>


            {/* <FlatList
                numColumns={20}
                data={['1', '2', '1', '2', '1', '2', '1', '2',]}
                renderItem={({ item }) =>
                    <View style={styles.category}>
                        <Text style={fontStyle.regular16_600}>{item}</Text>
                    </View>
                }
                keyExtractor={(index, item) => index}
            /> */}

            {data.map((item, index) => (
                <TouchableOpacity key={item.id} style={[styles.category,
                    // {  ? backgroundColor: colors.primaryGreen : ''}
                ]} onPress={() => handelPress(item.id)}>
                    {icon &&
                        <View style={{ justifyContent: 'center' }}>
                            <SvgXml style={styles.iconView} xml={icon} />
                        </View>
                    }
                    <Text style={[fontStyle.regular16_600]}>{item.title}</Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}

export default CategoryBar

const styles = StyleSheet.create({
    categoryView: {
        // borderWidth: 1,
        marginVertical: 24,
        flexDirection: 'row',
    },

    category: {
        borderWidth: 2,
        borderColor: colors.primaryGreen,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginRight: 12,
        borderRadius: 100,
        flexDirection: 'row'
    },

    iconView: {
        marginRight: 8,

    }
})