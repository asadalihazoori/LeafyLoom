import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import { fontStyle } from '../../theme/fonstStyle'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import Button from '../../components/Button'
import AlertModal from '../../components/AlertModal'

const FingerPrint = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleImageSelected = (imageUri) => {

    };

    const handlePress = () => {
        // navigation.navigate('CreateNewPin')
        setModalVisible(true);
        // console.log(inputs);
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerMainContainer}>
                <Header title={'Set Your Fingerprint'} />
                <View style={styles.textView}>
                    <Text style={[fontStyle.regular18, styles.text]}>Add a fingerprint to make your account
                        more secure.</Text>
                </View>
                <View style={styles.fingerPrintView}>
                    <View style={styles.innerView} >

                        <SvgXml xml={icons.fingerPrint} />
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={[fontStyle.regular18, styles.text]}>Please put your finger on the fingerprint scanner to get started.</Text>
                </View>
                <View style={styles.buttonView}>
                    <View style={styles.innerButtonView}>

                        <Button title={'Skip'} />
                    </View>
                    <View style={{ marginLeft: 12 }}></View>
                    <View style={styles.innerButtonView}>

                        <Button title={'Continue'} onPress={handlePress} />
                    </View>

                </View>

                <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                    onImageSelected={handleImageSelected} />
            </View>
        </View >
    )
}

export default FingerPrint