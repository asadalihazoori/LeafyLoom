import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
    },

    bottomView: {
        // width: 428,
        width: '100%',
        height: 550,
        bottom: 0,
        position: 'absolute',
        // borderWidth: 1,
        alignItems: 'center'

    },

    textView: {
        // marginVertical: 32,
        // borderWidth: 1,
        // borderColor: 'red',
        maxWidth: 364,
        marginTop: 252,
    },

    welcomeText: {
        fontFamily: 'Urbanist',
        fontSize: 48,
        color: '#212121',
        fontWeight: '700',
        fontStyle: 'normal',
    },

    leafyLoomText: {
        marginTop: 12,
        fontSize: 65,
        fontFamily: 'Urbanist',
        fontWeight: '900',
        fontStyle: 'normal',
        color: '#01B763'
    },

    description: {
        marginTop: 24,
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#424242',
    },


})

export default styles;