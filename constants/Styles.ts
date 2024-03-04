import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdffff',
    },
    textHeadings: {
        fontSize: 22,
        color: Colors.dark,
        paddingTop: 8,
        paddingBottom: 56,
        fontFamily : 'Cereal-medium',

    },
    inputField: {
        height: 58,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
      },
      btn: {
        backgroundColor: Colors.buttonColor1,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Cereal-medium',
      },
      btnIcon: {
        position: 'absolute',
        left: 16,
      },
      footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
      },
});