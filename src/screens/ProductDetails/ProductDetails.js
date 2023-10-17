import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { fontStyle } from '../../theme/fonstStyle'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import { colors } from '../../theme/colors'
import Button from '../../components/Button'

const ProductDetails = () => {
    const [Wish, setWished] = useState(false);

    const handlePress = () => {
        setWished(!Wish);


    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/products/CartImage.png')} />
            </View>
            <View style={styles.detailsView}>
                <View style={styles.innerDetailView}>

                    <View style={styles.headerView}>
                        <View style={styles.titleView}>
                            <Text style={fontStyle.bold32}>Airtight Cactus</Text>
                        </View>
                        <TouchableOpacity style={styles.iconView} onPress={handlePress}>
                            {Wish ?
                                <SvgXml xml={icons.heart.outline} />
                                :
                                <SvgXml xml={icons.heart.filled} />

                            }
                        </TouchableOpacity>
                    </View>



                    <View style={styles.ratingView}>
                        <View style={styles.soldView}>
                            <Text style={[fontStyle.regular10, { fontWeight: 600 }]}>4,268 Sold</Text>
                        </View>

                        <View style={styles.starView}>
                            <View style={{ flexDirection: 'row' }}>

                                <SvgXml xml={icons.star} />
                                <Text style={[fontStyle.regular14_500, styles.reviewText]}>4.9 (4,749 reviews)</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.lineSeparator}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <View style={styles.descriptionView}>
                        <Text style={fontStyle.regular18_700}>Description</Text>
                        <Text style={[fontStyle.regular14_400, { marginTop: 8 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>

                    <View style={styles.quantityView}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={fontStyle.regular18_700}>Quantity</Text>
                        </View>
                        <View style={styles.incrementView}>
                            <TouchableOpacity>
                                <SvgXml xml={icons.productDescriptionMinus} />
                            </TouchableOpacity>
                            <Text style={[fontStyle.regular18_700, { color: colors.primaryGreen, marginHorizontal: 20 }]}>2</Text>
                            <TouchableOpacity>
                                <SvgXml xml={icons.productDescriptionPlus} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.lineSeparator}>
                        <SvgXml xml={icons.prductDetailSeparator} />
                    </View>

                    <View style={styles.bottomView}>
                        <View style={{ marginRight: 32, justifyContent: 'center' }}>

                            <View>
                                <Text style={fontStyle.regular12}>Total Price</Text>
                                <Text style={[fontStyle.regular24, { marginTop: 6 }]}>$72</Text>
                            </View>


                        </View>
                        <View style={{ flex: 1 }} >
                            <Button title={'Add to Cart'} />
                        </View>

                    </View>



                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails