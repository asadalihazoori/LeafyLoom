import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const Welcome = () => {
    return (
        <ImageBackground source={require('../../assets/welcomeSceenPots/welcome.png')} style={styles.backgroundImage} >
            <View style={styles.bottomView}>

                <View style={styles.textView}>
                    <Text style={styles.welcomeText}>Welcome to 👋</Text>
                    <Text style={styles.leafyLoomText}>LeafyLoom</Text>
                    <Text style={styles.description}>The best plant e-commerce & online store app of the century for your needs!</Text>
                </View>


            </View>
        </ImageBackground>
    )
}

export default Welcome