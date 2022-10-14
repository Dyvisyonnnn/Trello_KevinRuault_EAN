import { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, Alert } from "react-native";
import { delTask, editTask, getTaskDesc } from "../api/database";
import { TodoContext } from "../context";
import { styles } from "../styles";
import { MyBout } from "./bout";
import { MyInput } from "./input";
import { MultilineInput } from "./multilineInput";

export function Task({ nom, colName, refreshTask, setRefreshTask }) {
    const { user } = useContext(TodoContext);
    const [modalOpenTask, setModalOpenTask] = useState(false)
    const [modalEditTask, setModalEditTask] = useState(false)
    const [taskName, setTaskName] = useState(nom)
    const [tasknewName, setTasknewName] = useState(nom)
    const [taskDesc, setTaskDesc] = useState('')

    const handleClickEditTask = () => {
        editTask(user.uid, colName, taskName, tasknewName, taskDesc).then(() => {
            setTaskName(tasknewName)
        }).catch(err => Alert.alert('Error:', err.message))
        setModalEditTask(!modalEditTask)
    }

    const handleClickDelTask = () => {
        delTask(user.uid, colName, taskName).then(() => {
            Alert.alert(`Tâche '${taskName}' supprimée`)
            setRefreshTask(!refreshTask)
        }).catch(err => Alert.alert('Error:', err.message))
    }

    useEffect(() => {
        getTaskDesc(user.uid, colName, nom).then(data => {
            setTaskDesc(data)
        })
    }, [])

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditTask}
                onRequestClose={() => {
                    setModalEditTask(!modalEditTask);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Modifier la tâche</Text>
                        <MyInput label={"Nom de la tâche"} valeur={tasknewName} etat={setTasknewName} />
                        <MultilineInput label={'Description'} valeur={taskDesc} etat={setTaskDesc} />
                        <MyBout label="Valider" click={handleClickEditTask} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpenTask}
                onRequestClose={() => {
                    setModalOpenTask(!modalOpenTask);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewTask}>
                        <Text style={styles.modalTextTaskTitle}>{taskName}</Text>
                        <Text style={styles.modalTextTaskDesc}>Description :</Text>
                        <Text style={styles.modalTextTask}>{taskDesc ? taskDesc : 'Aucune description pour cette tâche'}</Text>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalOpenTask(!modalOpenTask)}>
                <View style={styles.taskContainer}>
                    <Text>{taskName}</Text>
                    <View style={styles.colIconMenu}>
                        <TouchableOpacity style={styles.taskIcon} onPress={() => setModalEditTask(!modalEditTask)}>
                            <Image style={styles.plusIcon} source={require('../assets/icons/edit.png')} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.taskIcon} onPress={handleClickDelTask}>
                            <Image style={styles.plusIcon} source={require('../assets/icons/trash.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </>

    )
}