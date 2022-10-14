import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles'
export function MyInput({ label, valeur, etat, secure }) {
    return (
        <View style={styles.contener}>
            <Text style={styles.labelInput}>{label}</Text> 
            <TextInput secureTextEntry={secure} value={valeur} onChangeText={etat} style={styles.input} />
        </View>
    )
}