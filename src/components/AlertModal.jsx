import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'
import { colors } from '../theme/colors'
import { fontStyle } from '../theme/fonstStyle'
import LoaderAnimation from './LoaderAnimation'

const AlertModal = ({ modalVisible, setModalVisible, onImageSelected }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}

        // presentationStyle='overFullScreen'

        >
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.innerContainer}>
                        <SvgXml xml={icons.alertModalConfirmFrame} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={fontStyle.regular24}>Congratulations!</Text>
                        <Text style={[fontStyle.regular18, { fontSize: 16, marginTop: 16 }]}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                    </View>

                    <View style={styles.loaderView}>
                        <View style={styles.innerLoaderView}>
                            <LoaderAnimation />
                        </View>



                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default AlertModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'

    },

    container1: {
        // borderWidth: 2,
        paddingHorizontal: 32,
        paddingTop: 40,
        paddingBottom: 32,
        // flex: 1,
        backgroundColor: colors.white,
        borderRadius: 44,
        width: '85%',

    },
    innerContainer: {
        // borderWidth: 1,
        alignItems: 'center',
        // flex:1 
    },
    textView: {
        // borderWidth: 1,
        marginTop: 32,
        alignItems: 'center'
    },

    loaderView: {
        marginTop: 50,
        marginBottom: 25,
        // borderWidth: 1,
        alignItems: 'center'

    },
    innerLoaderView: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})