import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'
export function MyBout({ label, click }) {
    return (
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={click}>
            <Text style={styles.textStyle}>{label}</Text>
        </TouchableOpacity>
    )
}