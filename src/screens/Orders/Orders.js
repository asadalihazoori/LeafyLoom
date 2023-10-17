import { Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import MainHeader from '../../components/MainHeader';
import CartProductModal from '../../components/CartProductModal';
import { icons } from '../../assets/icons/icons';
import RemoveProductCartModal from '../../components/RemoveProductCartModal';

const Orders = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handlePress = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <View style={styles.container}>

            <MainHeader title={'My Cart'} icon={icons.searchHeader} />

            <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>

                <CartProductModal onPress={handlePress} />
                <CartProductModal />
                <CartProductModal />
                <CartProductModal />
                <CartProductModal />
                <CartProductModal />
                <CartProductModal />

                {/*                 
                <View style={styles.mainView}>
                    <View style={styles.frameView}>
                        <SvgXml xml={icons.cartFrame} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={fontStyle.regular24}>Your cart is empty</Text>
                        <Text style={[fontStyle.regular18, { textAlign: 'center', marginTop: 12 }]}>You don't have any items added to cart yet. You need to add items to cart before checkout.</Text>
                    </View>
                </View> */}

                <RemoveProductCartModal
                    modalVisible={modalVisible} setModalVisible={setModalVisible}

                />

            </ScrollView>
        </View>
    )
}

export default Orders;
