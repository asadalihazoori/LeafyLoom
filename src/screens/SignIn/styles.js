import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const margin = 17;

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 48,
        // borderWidth: 1,
        flex: 1,
        backgroundColor: colors.white
    },

    innerMainContainer: {
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems:'center',
        // backgroundColor: 'pink'
        // borderWidth: 1,
        flex: 1

    },
    logoView: {
        // borderWidth: 1,
        // backgroundColor:'red'
        marginTop: margin

    },

    textView: {
        // marginTop: 10,
        marginTop: margin,
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'red',
    },

    mainContainer: {
        // borderWidth: 1,
        borderColor: 'orange',
        // backgroundColor: 'pink'
        marginTop: margin
    },
    bottomView: {
        alignItems: 'center',
        // backgroundColor: 'blue',
        // borderWidth: 1,
        marginTop: margin
    },

    bottomInnerView: {
        flexDirection: 'row'
    },

    accountText: {
        color: '#9E9E9E',
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
    },

    signUpText: {
        color: '#01B763',
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontWeight: '600',
        fontStyle: 'normal',
        marginLeft: 8

    },
    rememberView: {
        // borderWidth: 1,
        alignItems: 'center',
        marginVertical: 24
    },
    innerRememberView: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center'
    },
    forgetView: {
        alignItems: 'center',
        marginTop: 24
    },
    mediaView: {
        // backgroundColor: 'red',
        // borderWidth: 1,
        borderColor: 'red',
        marginTop: margin

    }

});

export default styles;