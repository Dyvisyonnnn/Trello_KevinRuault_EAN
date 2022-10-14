import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getTasksByColName } from "../api/database";
import { TodoContext } from "../context";
import { styles } from "../styles";
import { Task } from "./task";


export function Tache({ colName, refresh }) {
    const { user } = useContext(TodoContext);
    const [tasks, setTasks] = useState([])
    const [refreshTask, setRefreshTask] = useState(false)



    useEffect(() => {
        console.log('ici cest la colName' ,colName)
        getTasksByColName(user.uid, colName).then(data => {
            setTasks([...data])
            console.log('Nom de la colonne : ', colName, '|| Avec les valeurs : ', data)
        })
    }, [refresh, refreshTask])
    return (
        <>
            {tasks && tasks.map((elem, key) => <Task key={elem} nom={elem} colName={colName} refreshTask={refreshTask} setRefreshTask={setRefreshTask}/>)}
        </>

    )
}
