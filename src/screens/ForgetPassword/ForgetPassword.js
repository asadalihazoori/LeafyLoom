import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import Button from '../../components/Button'
import { fontStyle } from '../../theme/fonstStyle'
import { colors } from '../../theme/colors'

const ForgetPassword = ({ navigation }) => {
    const [service, setService] = useState(null);

    const handlePress = () => {
        navigation.navigate('ForgetPasswordTypeOTP')
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerMainContainer}>
                <Header title={'Forgot Password'} />
                <View style={styles.frameView}>
                    <View style={styles.innerFrameView}>
                        <SvgXml xml={icons.forgetPasswordFrame} />
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View>
                        <Text style={fontStyle.regular18_500}>Select which contact details should we use to reset your password</Text>
                    </View>

                    <TouchableOpacity style={[styles.touchableView, { borderColor: (service === 'sms') ? colors.primaryGreen : colors.grey200 }]} onPress={() => setService('sms')}>
                        <View style={styles.serviceView}>
                            <View>
                                <SvgXml xml={icons.sms} />
                            </View>
                            <View style={styles.textView}>
                                <View style={styles.innerTextView}>

                                    <View style={styles.text}>
                                        <Text style={fontStyle.regular14_500}>via SMS:</Text>
                                    </View>
                                    <View style={[styles.text, { marginTop: 8 }]}>
                                        <Text style={[fontStyle.regular16, { color: colors.black }]}>+1 111 ******99</Text>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.touchableView, { borderColor: (service == 'email') ? colors.primaryGreen : colors.grey200 }]} onPress={() => setService('email')}>
                        <View style={styles.serviceView}>
                            <View>
                                <SvgXml xml={icons.sms} />
                            </View>
                            <View style={styles.textView}>
                                <View style={styles.innerTextView}>

                                    <View style={styles.text}>
                                        <Text style={fontStyle.regular14_500}>via Email:</Text>
                                    </View>
                                    <View style={[styles.text, { marginTop: 8 }]}>
                                        <Text style={[fontStyle.regular16, { color: colors.black }]}>and***ley@yourdomain.com</Text>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>

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

export default ForgetPassword