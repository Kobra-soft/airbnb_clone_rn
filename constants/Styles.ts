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
        fontFamily : 'Cereal-medium',
    },
});