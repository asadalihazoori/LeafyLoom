import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/Header'
import { fontStyle } from '../../theme/fonstStyle'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import LineSeparator from '../../components/LineSeparator'
import Button from '../../components/Button'

const LetYouIn = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerMainContainer}>
        <Header />
        <View style={styles.frameView}>
          <SvgXml xml={icons.letyouin} />
        </View>
        <View style={styles.textView}>
          <Text style={fontStyle.regular48}>Let's you in</Text>

        </View>

        <View style={styles.mainContainer}>
          <View style={styles.mediaContainer}>
            <TouchableOpacity style={styles.mediaModal}>
              <View style={styles.innerView}>
                <SvgXml xml={icons.facebook} />
                <Text style={styles.mediaText}>Continue with Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mediaModal, { marginTop: 16 }]}>
              <View style={styles.innerView}>
                <SvgXml xml={icons.google} />
                <Text style={styles.mediaText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mediaModal, { marginTop: 16 }]}>
              <View style={styles.innerView}>
                <SvgXml xml={icons.apple} />
                <Text style={styles.mediaText}>Continue with Apple</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>

            <View style={{ marginTop: 12 }}></View>
            <LineSeparator title={'or'} />
            <View style={{ marginTop: 12 }}></View>
          </View>


          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.signinText}>Sign in with password</Text>
          </TouchableOpacity> */}
          <Button title={'Sign in with password'} onPress={handlePress} />

        </View>

        <View style={styles.bottomView}>
          <View style={styles.bottomInnerView}>

            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
              <Text style={styles.signUpText}>Sign up</Text>

            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  )
}

export default LetYouIn