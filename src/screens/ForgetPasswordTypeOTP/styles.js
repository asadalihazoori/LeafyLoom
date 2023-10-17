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

    frameView: {
        // borderWidth: 1,
        alignItems: 'center'
    },

    innerFrameView: {
        // borderWidth: 1,
        borderColor: 'red'
    },

    mainContainer: {
        // borderWidth: 1,
        borderColor: 'orange'

    },
    buttonView: {
        // borderWidth: 1,
        // flex:1
    },

    buttonInnerView: {
        // flex:1
        alignItems: 'center'

    },

    serviceView: {
        // borderWidth: 1,
        flexDirection: 'row'
    },

    touchableView: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: 'transparent',
        marginTop: 24
    },
    textView: {
        // marginLeft: 20,
        // borderWidth: 1,
        justifyContent: 'center'
    },
    innerTextView: {
        // borderWidth: 1,
        // borderColor: 'red'
    },

    text: {
        // borderWidth: 1,
        textAlign: 'center'
    }


});

export default styles;