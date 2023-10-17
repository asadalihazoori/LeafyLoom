import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Welcome from '../screens/Welcome/Welcome';
import LetYouIn from '../screens/LetYouIn/LetYouIn';
import WalkThrough from '../screens/WalkThrough/WalkThrough';
import SignUp from '../screens/SignUp/SignUp';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import MediaLine from '../components/MediaLine';
import FillProfile from '../screens/FillProfile/FillProfile';
import FingerPrint from '../screens/FingerPrint/FingerPrint';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import CreateNewPassword from '../screens/createNewPassword/CreateNewPassword';
import AlertModal from '../components/AlertModal';
import CreateNewPin from '../screens/createNewPin/CreateNewPin';
import OTPInput from '../components/OTPInput';
import SignIn from '../screens/SignIn/SignIn';
import ForgetPasswordTypeOTP from '../screens/ForgetPasswordTypeOTP/ForgetPasswordTypeOTP';
import DropDown from '../components/DropDown';
import BottomTab from './BottomTab';
import Google from '../components/Google';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import RangeSliderExample from '../components/RangeSliderExample';
import ToggleButton from '../components/ToggleButton';
import FilterModal from '../components/FilterModal';


const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTab'>
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='WalkThrough' component={WalkThrough} options={{ headerShown: false }} />
                <Stack.Screen name='LetYouIn' component={LetYouIn} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Logo' component={Logo} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='Input' component={Input} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='Button' component={Button} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='MediaLine' component={MediaLine} options={{ headerShown: false }} /> */}
                <Stack.Screen name='FillProfile' component={FillProfile} options={{ headerShown: false }} />
                <Stack.Screen name='FingerPrint' component={FingerPrint} options={{ headerShown: false }} />
                <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name='ForgetPasswordTypeOTP' component={ForgetPasswordTypeOTP} options={{ headerShown: false }} />
                <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} options={{ headerShown: false }} />
                <Stack.Screen name='AlertModal' component={AlertModal} options={{ headerShown: false }} />
                <Stack.Screen name='CreateNewPin' component={CreateNewPin} options={{ headerShown: false }} />
                <Stack.Screen name='OTPInput' component={OTPInput} options={{ headerShown: false }} />
                <Stack.Screen name='DropDown' component={DropDown} options={{ headerShown: false }} />
                <Stack.Screen name='Google' component={Google} options={{ headerShown: false }} />
                <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }} />
                <Stack.Screen name='Slider' component={RangeSliderExample} options={{ headerShown: false }} />
                <Stack.Screen name='ToggleButton' component={ToggleButton} options={{ headerShown: false }} />
                <Stack.Screen name='FilterModal' component={FilterModal} options={{ headerShown: false }} />

                <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index;