import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import styles from './styles'
import Button from '../../components/Button'
import { fontStyle } from '../../theme/fonstStyle'
import OTPInput from '../../components/OTPInput'

const ForgetPasswordTypeOTP = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('CreateNewPassword');
    };
    return (
        <View style={styles.container}>
            <View style={styles.innerMainContainer}>
                <Header title={'Forgot Password'} />
                <View >

                    <View style={styles.textView}>
                        <Text style={[fontStyle.regular18, styles.text, { marginBottom: 60 }]}>Code has been send to +1 111 ******99</Text>
                    </View>
                    <View>
                        <OTPInput length={4} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={[fontStyle.regular18, styles.text, { marginTop: 60 }]}>Resend code in 55 s</Text>
                    </View>
                </View>


                <Button title={'Verify'} onPress={handlePress} />
            </View>
        </View>
    )
}

export default ForgetPasswordTypeOTP