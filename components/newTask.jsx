import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, Keyboard, SafeAreaView } from 'react-native'
import { addTask } from '../api/database';
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { TodoContext } from '../context';
import { styles } from '../styles';

export function NewTask() {
    const [task, setTask] = useState("");
    const { user, setTasks, tasks } = useContext(TodoContext);

    const handleClick = () => {
        Keyboard.dismiss()
        //    console.log(task);
        addTask(user.uid, task).then(() => {
            Alert.alert('Tâche ajoutée')
            setTasks([...tasks, task])
        }).catch(err => Alert.alert('Error:', err.message))
        // connectUser(login, mdp).then(data => {
        //     setuser(data);
        // }).catch(err => Alert.alert(err))
    }
    return (
        <SafeAreaView style={styles.safe}>

            <View style={styles.contConnect}>
                <MyInput label={"tâche"} valeur={task} etat={setTask} />
                <MyBout label="Valider" click={handleClick} />

            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}