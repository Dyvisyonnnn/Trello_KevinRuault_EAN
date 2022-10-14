import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles'
export function MultilineInput({ label, valeur, etat }) {
    return (
        <View style={styles.multilineContener}>
            <Text style={styles.labelMultilineInput}>{label}</Text>
            <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.multiLineInput}  
                value={valeur} 
                onChangeText={etat} />
        </View>
    )
}