import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 4,
        borderColor: 'red',
        backgroundColor: colors.white,


    },
    wrapper: {

    },
    slide: {
        flex: 1,
        // borderWidth: 3,
    },

    page: {
        paddingHorizontal: 24,
        paddingTop: 16,
        // paddingBottom: 48,
        // borderWidth: 1,
        flex: 1
    },

    imageView: {
        backgroundColor: colors.backgroundSilver1,
        // borderWidth: 4,
        borderColor: 'green',
        // height: 500,
        // width: '100%',
        // maxHeight: 500,
        // maxWidth: '100%'
        // flex: 1

    },


    image: {

        alignItems: 'center',
        // borderWidth: 2,
        borderColor: 'orange',
        // marginRight:  50
        // maxHeight: 500,
        // maxWidth: '80%'

        // width: '80%',
        // overflow: 'visible'
    },

    textView: {
        // borderWidth: 1,
        // flex: 2,
        // marginTop: 32,
        // marginTop: 24,
        // marginBottom: 48
    },

    text: {
        fontFamily: 'Urbanist',
        fontSize: 40,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#212121',
        marginVertical: 24

    },


    customPaginationStyle: {
        position: 'absolute',
        bottom: 14,
        left: 0,
        right: 0,
        alignItems: 'center',
        // borderWidth:1
    },
    dotStyle: {
        // borderWidth:1,
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 8,
    },
    activeDotStyle: {
        width: 32,
        height: 8,
        borderRadius: 100,
        backgroundColor: '#01B763',
        marginHorizontal: 8,
    },

});

export default styles;