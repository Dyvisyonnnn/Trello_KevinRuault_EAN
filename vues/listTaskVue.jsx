import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Modal, View, Text, TouchableOpacity, Keyboard, ScrollView, Alert, Image } from "react-native";
import { getCols } from "../api/database";
import { addCol } from "../api/database";
import { MyBout } from "../components/bout";
import { Col } from "../components/col";
import { MyInput } from "../components/input";
import { TodoContext } from "../context";
import { styles } from "../styles";

export function ListTaskVue() {
    const [modalNewCol, setModalNewCol] = useState(false);
    const { user } = useContext(TodoContext);
    const [cols, setCols] = useState([])
    const [col, setCol] = useState('')
    const [colRefresh, setColRefresh] = useState(false)
    
    const handleClick = () => {
        Keyboard.dismiss()
        addCol(user.uid, col).then(() => {
            Alert.alert('Colonne ajoutée')
            setCols([...cols, col])
        }).catch(err => Alert.alert(err))
        setModalNewCol(!modalNewCol)
        setCol('')
    }

    useEffect(() => {
        getCols(user.uid).then(data => {
            setCols(data)
        })
    }, [colRefresh]);

    return (
        <SafeAreaView style={styles.listTaskContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNewCol}
                onRequestClose={() => {
                    setModalNewCol(!modalNewCol);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ajouter une colonne</Text>
                        <MyInput label={"Nom de la colonne"} valeur={col} etat={setCol} />
                        <MyBout label="Valider" click={handleClick} />
                    </View>
                </View>
            </Modal>
            
            <ScrollView>
                <View>
                    {cols.map((elem, key) => <View key={key}>
                        <Col colTitle={elem} colsList={cols} colRefresh={colRefresh} setColRefresh={setColRefresh}/>
                    </View>
                    )}

                    <TouchableOpacity style={styles.addColContainer} onPress={() => setModalNewCol(!modalNewCol)} >
                        <Image style={styles.plusIcon} source={require('../assets/icons/plus.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}