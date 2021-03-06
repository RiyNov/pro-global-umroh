import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#128C7E',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    icon: {
        height: 40,
        width: 40,
    }
})

export default styles