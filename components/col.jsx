import { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, Keyboard, Alert, TextInput } from "react-native";
import { addTask, delCol, editCol } from "../api/database";
import { TodoContext } from "../context";
import { styles } from "../styles";
import { Tache } from "./tache";
import { MyBout } from "../components/bout";
import { MyInput } from "../components/input";
import { MultilineInput } from "./multilineInput";

export function Col({ colTitle, colsList, colRefresh, setColRefresh }) {
    const [modalNewTask, setModalNewTask] = useState(false);
    const { user } = useContext(TodoContext);
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [refresh, setRefresh] = useState(false)
    const [modalEditCol, setModalEditCol] = useState(false)
    const [editableCol, setEditableCol] = useState(colTitle)

    const handleClickNT = () => {
        console.log(colTitle)
        Keyboard.dismiss()
        addTask(user.uid, taskName, colTitle, taskDesc).then(() => {
            Alert.alert('Tâche ajoutée')
            setRefresh(!refresh)
        }).catch(err => Alert.alert('Error:', err.message))
        setModalNewTask(!modalNewTask)
    }

    const handleClickDelCol = () => {
        delCol(user.uid, colTitle).then(() => {
            Alert.alert(`Colonne '${colTitle}' supprimée`)
            setColRefresh(!colRefresh)
            setTimeout(() => {
                setRefresh(!refresh)
            }, 100)
            
        }).catch(err => Alert.alert('Error:', err.message))
    }

    const handleClickEditCol = () => {
        editCol(user.uid, colTitle, editableCol).then(() => {
            setColRefresh(!colRefresh)
        }).catch(err => Alert.alert('Error:', err.message))
        setModalEditCol(!modalEditCol)
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNewTask}
                onRequestClose={() => {
                    setModalNewTask(!modalNewTask);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ajouter une tâche</Text>
                        <MyInput label={"Nom de la tâche"} valeur={taskName} etat={setTaskName} />
                        <MultilineInput label={'Description'} valeur={taskDesc} etat={setTaskDesc}/>
                        <MyBout label="Valider" click={handleClickNT} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditCol}
                onRequestClose={() => {
                    setModalEditCol(!modalEditCol);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ajouter une colonne</Text>
                        <MyInput label={"Nom de la colonne"} valeur={editableCol} etat={setEditableCol} />
                        <MyBout label="Valider" click={handleClickEditCol} />
                    </View>
                </View>
            </Modal>

            <View style={styles.colContainer}>

                <View style={styles.colHeader}>
                    <Text style={styles.columnTitle}>{colTitle}</Text>
                    <View style={styles.colIconMenu}>
                        <TouchableOpacity style={styles.colIcon} onPress={() => setModalEditCol(!modalEditCol)}>
                            <Image style={styles.plusIcon} source={require('../assets/icons/edit.png')} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.colIcon} onPress={handleClickDelCol}>
                            <Image style={styles.plusIcon} source={require('../assets/icons/trash.png')} ></Image>
                        </TouchableOpacity>
                    </View>


                </View>

                <Tache colName={colTitle} listCol={colsList} refresh={refresh} />
                <TouchableOpacity style={styles.addTaskContainer} onPress={() => setModalNewTask(!modalNewTask)}>
                    <Image style={styles.plusIcon} source={require('../assets/icons/plus.png')} ></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}


