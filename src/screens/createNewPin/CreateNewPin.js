import { View, Text, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import { fontStyle } from '../../theme/fonstStyle'
import Button from '../../components/Button'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import OTPInput from '../../components/OTPInput'

const CreateNewPin = ({ navigation }) => {
    const [code, setCode] = useState(null);

    const handlePress = () => {
        navigation.navigate('FingerPrint');

    }

  

    return (
        <View style={styles.container}>
            <View style={styles.innerMainContainer}>
                <Header title={'Create New PIN'} />

                <View style={styles.textView}>
                    <Text style={[fontStyle.regular18, styles.text]}>Add a PIN number to make your account
                        more secure.</Text>
                </View>

                <View>
                    <OTPInput length={4} />
                </View>


                <View style={styles.buttonView}>
                    <View style={styles.buttonInnerView}>
                        <Button title={'Continue'} onPress={handlePress} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateNewPin