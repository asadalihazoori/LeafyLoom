import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors';
import { fontStyle } from '../theme/fonstStyle';
import { SvgXml } from 'react-native-svg';
import { icons } from '../assets/icons/icons';
import CategoryBar from './CategoryBar';
import { Category, Rating, SortBy } from '../dummyData/FilterData';
import LightButton from './LightButton';
import Button from './Button';

const FilterModal = ({ modalVisible, setModalVisible }) => {


    // const handlePress = () => {
    //     console.log('called');
    //     setModalVisible(!modalVisible);
    // }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={fontStyle.regular24}>Sort & Filter</Text>
                    </View>

                    <View style={{ marginVertical: 24 }}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <View>
                        <Text style={fontStyle.regular18_700}>Categories</Text>
                        <CategoryBar data={Category} />
                    </View>

                    {/* <View>
                        <Text style={fontStyle.regular18_700}>Price Range</Text>
                    </View> */}

                    <View>
                        <Text style={fontStyle.regular18_700}>Sort by</Text>
                        <CategoryBar data={SortBy} />
                    </View>

                    <View>
                        <Text style={fontStyle.regular18_700}>Rating</Text>
                        <CategoryBar data={Rating} icon={icons.filled_star.green} />
                    </View>

                    <View style={{ marginBottom: 24 }}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-between'
                    }}>
                        <View style={{ flex: 1 }}>
                            <LightButton title={'Reset'} />
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>

                            <Button title={'Apply'} />
                        </View>
                    </View>


                </View>
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    modalContent: {
        paddingHorizontal: 24,
        // borderWidth: 1,
        paddingTop: 8,
        paddingBottom: 36, //48,
        backgroundColor: colors.grey100,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

})