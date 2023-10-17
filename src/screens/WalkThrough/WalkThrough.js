import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import { fontStyle } from '../../theme/fonstStyle';
import Button from '../../components/Button';


const WalkThrough = ({ navigation }) => {
    const swiperRef = useRef(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const buttonTitle = currentSlide === 2 ? 'Continue' : 'Next';
    const handleNextPress = () => {
        if (swiperRef.current) {
            if (currentSlide === 2) {
                navigation.navigate('LetYouIn');
            } else {
                swiperRef.current.scrollBy(1);
            }

            // const currentIndex = swiperRef.current.state.index;
            // const totalSlides = swiperRef.current.state.total;

            // if (currentIndex === totalSlides - 1) {
            //     setIsLastSlide(true);
            // } else {
            //     setIsLastSlide(false);
            // }
        }
    };

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper}
                showsButtons={false}
                ref={swiperRef}
                loop={false}
                // autoplay={true}
                paginationStyle={styles.customPaginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                onIndexChanged={handleSlideChange}
            >
                <View style={styles.slide}>
                    <View style={styles.imageView}>
                        <View style={styles.image}>
                            <Image source={require('../../assets/Plants/Plant1.png')} />

                        </View>
                    </View>
                    <View style={styles.page}>
                        <View style={styles.textView}>
                            <Text style={[fontStyle.regular40, { textAlign: 'center' }]}>We provide high quality plants just for you</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.imageView}>
                        <View style={styles.image}>
                            <Image source={require('../../assets/Plants/Plant2.png')} />
                        </View>
                    </View>
                    <View style={styles.page}>
                        <View style={styles.textView}>
                            <Text style={[fontStyle.regular40, { textAlign: 'center' }]}>Your satisfaction is our number one priority</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.imageView}>
                        <View style={styles.image}>
                            <Image source={require('../../assets/Plants/Plant3.png')} />
                        </View>
                    </View>
                    <View style={styles.page}>

                        <View style={styles.textView}>
                            <Text style={[fontStyle.regular40, { textAlign: 'center' }]}>Let's Shop Your Favorite Plants with LeafyLoom!</Text>
                        </View>
                    </View>
                </View>
            </Swiper>
            <View style={{ alignItems: 'center', marginBottom: 14 }}>

                <Button title={buttonTitle} onPress={handleNextPress} />
            </View>

        </View>
    );
};

export default WalkThrough;
