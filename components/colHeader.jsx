import { TouchableOpacity, Text } from "react-native"
import { styles } from "../styles";

const ColHeader = (label) => {
    return (
        <TouchableOpacity style={styles.colButton}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )

}

export default ColHeader;