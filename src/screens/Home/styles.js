import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        // padding: 24,
        // paddingHorizontal: 12,
        // paddingLeft: 12,
        // paddingTop: 12,

        // borderWidth: 1,

    },

    innerContainer: {
        borderColor: colors.white,
        borderWidth: 1,
        flex: 1,
        // marginLeft: 12,
        // marginRight:12,
        // marginRight: 24,
        padding: 15
    },

    header: {
        // borderWidth: 1,
        marginTop: 24,
        borderColor: 'red',
        flexDirection: 'row',
    },
    imageView: {
        // borderWidth: 1,
        justifyContent: 'center'
    },
    textView: {
        // borderWidth: 1,
        borderColor: 'green',
        marginLeft: 16,
        flex: 1,
    },
    iconView: {
        // borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        marginLeft: 16,
        paddingHorizontal: 5.38,
        // alignContent: 'flex-end'
    },
    offerTextView: {
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 24

    },

    specialOfferView: {
        // borderWidth: 1,

    },

    categoryView: {
        borderWidth: 1,
        flexDirection: 'row',
    },

    category: {
        borderWidth: 2,
        borderColor: colors.primaryGreen,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginLeft: 12,
        borderRadius: 100
    },
});