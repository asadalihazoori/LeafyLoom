import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
        justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems:'center',
        // backgroundColor: 'pink'
        // borderWidth: 1,
        flex: 1


    },

    text: {
        textAlign: 'center'
    },

    buttonView: {
        // borderWidth: 1,
        // flex:1
    },

    buttonInnerView: {
        // flex:1
        alignItems: 'center'

    },

    pinView: {
        borderWidth: 1,
        alignItems: 'center'
    },
    innerPinView: {
        borderWidth: 1,
        borderColor: colors.primaryGreen,
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: colors.grey50,
        borderRadius: 16


    }

});

export default styles;