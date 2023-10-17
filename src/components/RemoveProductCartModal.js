import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { fontStyle } from '../theme/fonstStyle';
import { SvgXml } from 'react-native-svg';
import { icons } from '../assets/icons/icons';
import CartProductModal from './CartProductModal';
import Button from './Button';
import LightButton from './LightButton';

const RemoveProductCartModal = ({ modalVisible, setModalVisible, }) => {

    const handlePress = () => {
        console.log('called');
        setModalVisible(!modalVisible);
    }
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

                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Text style={fontStyle.regular24}>Remove From Cart?</Text>
                    </View>

                    <View style={{ marginVertical: 24 }}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <CartProductModal />

                    <View style={{ marginVertical: 24 }}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-between'
                    }}>
                        <View style={{ flex: 1 }}>
                            <LightButton title={'Cancel'} onPress={handlePress} />
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>

                            <Button title={'Yes, Remove'} onPress={handlePress} />
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default RemoveProductCartModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    modalContent: {
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 48,
        backgroundColor: colors.grey100,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
})