import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { fontStyle } from '../theme/fonstStyle'
import { colors } from '../theme/colors'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'

const Product = ({ Product }) => {

    // const Product = {
    //     image: require('../assets/products/Product/P1.png'),
    //     title: 'Prayer Plant',
    //     star: 4.8,
    //     sold: 4268,
    //     price: 39,

    // };

    // console.log(Product);

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                {/* <Image source={require('../assets/products/product1.png')} /> */}
                <Image source={Product.image} />

            </View>
            <View style={styles.bottomView}>
                <View>
                    <Text style={fontStyle.regular24}>{Product.title}</Text>
                    {/* <Text style={fontStyle.regular24}>Prayer Plant</Text> */}
                </View>

                <View style={styles.ratingView}>
                    <View style={{ justifyContent: 'center' }}>
                        <SvgXml xml={icons.star} />
                    </View>

                    <View style={{ justifyContent: 'center', marginHorizontal: 12, }}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Text style={[fontStyle.regular16_500, { color: colors.grey700 }]}>4.8</Text> */}
                            <Text style={[fontStyle.regular16_500, { color: colors.grey700 }]}>{Product.star}</Text>
                            <Text style={[fontStyle.regular16_500, { color: colors.grey700, marginLeft: 12 }]}>|</Text>

                        </View>
                    </View>

                    <View style={styles.soldView}>
                        {/* <Text style={[fontStyle.regular10, { fontWeight: 600 }]}>4,268 Sold</Text> */}
                        <Text style={[fontStyle.regular10, { fontWeight: 600 }]}>{Product.sold} Sold</Text>
                    </View>

                </View>

                <View>
                    {/* <Text style={[fontStyle.regular24, { color: colors.primaryGreen }]}>$29</Text> */}
                    <Text style={[fontStyle.regular24, { color: colors.primaryGreen }]}>${Product.price}</Text>
                </View>

            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        flex: 1,
        marginBottom: 24,
        // marginRight: 16
    },

    imageView: {
        backgroundColor: colors.backgroundSilver1,
        borderRadius: 16,
        height: 182,
        width: 172,
    },

    bottomView: {
        // borderWidth: 1,
        marginTop: 16

    },

    ratingView: {
        flexDirection: 'row',
        // borderWidth: 1,
        marginVertical: 12,

    },

    soldView: {
        borderColor: colors.primaryGreen,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        // marginLeft: 12
        // backgroundColor: ,

    },

})