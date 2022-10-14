import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, Keyboard, Alert } from "react-native";
import { addCol } from "../api/database";
import { TodoContext } from "../context";
import { styles } from "../styles";
import { MyBout } from "./bout";
import { ColHeader } from "./colHeader";
import { MyInput } from "./input";

export function ColManager(colsData) {
    const [modalVisible, setModalVisible] = useState(false);
    const { user, setCols, cols } = useContext(TodoContext);
    const [col, setCol] = useState('')
    const [colState, setColState] = useState('')

    const handleClick = () => {
        Keyboard.dismiss()
        addCol(user.uid, col).then(() => {
            Alert.alert('Colonne ajoutée')
            setCols([...cols, col])
        }).catch(err => Alert.alert(err))
        setModalVisible(!modalVisible)
    }   

    return (
        <>{}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ajouter une colonne</Text>
                        <MyInput label={"Nom de la colonne"} valeur={col} etat={setCol}/>
                        <MyBout label="Valider" click={handleClick}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.colManager}>
                {colsData['colsData'].map((elem, key) => <TouchableOpacity key={key} style={styles.colButton}>
                    <Text>{elem}</Text>
                </TouchableOpacity>)} 
                <TouchableOpacity style={styles.colButton} onPress={() => setModalVisible(!modalVisible)} >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </> 
    )



}