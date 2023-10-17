import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { fontStyle } from '../../theme/fonstStyle';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../assets/icons/icons';
import Search from '../../components/Search';
import { colors } from '../../theme/colors';
import Product from '../../components/Product';
import { Products } from '../../dummyData/ProductData';
import CategoryBar from '../../components/CategoryBar';
import { Category } from '../../dummyData/FilterData';

const Home = () => {

    return (
        // <View style={styles.container}>
        // {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */ }
        < ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.header}>
                <View style={styles.imageView}>
                    <SvgXml xml={icons.avatar} />

                </View>

                <View style={styles.textView}>
                    <Text style={fontStyle.regular16_500}>Good Morning 👋</Text>
                    <Text style={[fontStyle.regular20, { marginTop: 6 }]}>Andrew Ainsley</Text>
                </View>

                <TouchableOpacity style={styles.iconView} >
                    <SvgXml xml={icons.bellIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.iconView, { paddingHorizontal: 3 }]}>
                    <SvgXml xml={icons.wishList} />
                </TouchableOpacity>
            </View>
            <Search />
            <View style={styles.offerTextView}>
                <Text style={[fontStyle.regular20, { flex: 1 }]}>Special Offers</Text>
                <Text style={[fontStyle.regular20, { color: colors.primaryGreen, marginLeft: 12, letterSpacing: 0.2 }]}>See All</Text>

            </View>

            {/* <ScrollView horizontal={true} style={styles.specialOfferView} showsHorizontalScrollIndicator={false}> */}
            {/* <FlatList
                        numColumns={200}
                        data={Products}
                        renderItem={({ item }) => <Product Product={item} />}
                        keyExtractor={item => item.id}
                    /> */}


            {/* </ScrollView> */}

            <View style={[styles.offerTextView, { marginBottom: 0 }]}>
                <Text style={[fontStyle.regular20, { flex: 1 }]}>Most Popular</Text>
                <Text style={[fontStyle.regular20, { color: colors.primaryGreen, marginLeft: 12, letterSpacing: 0.2 }]}>See All</Text>
            </View>


            <CategoryBar data={Category} />

            <FlatList
                numColumns={2}
                data={Products}
                renderItem={({ item }) => <Product Product={item} />}
                keyExtractor={itemz => item.id}
            />

        </ScrollView >

    )
}

export default Home;
