import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function addTask(userId, taskName, colName, taskDesc) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let cols = data['col']
            //console.log(cols);
            cols.forEach(result => {
                if (result.name === colName) {
                    if (!result.tasks || result.tasks == "" || result.tasks === null) result.tasks = []
                    result.tasks.push({ name: taskName, desc: taskDesc })
                }
            })
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function addCol(userId, name) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            //console.log(data);
            data.push({ name: name, tasks: [] })
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function getTasksByColName(userId, colName) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let filteredtasks = []
            data.forEach(result => {
                if (result.name === colName) {
                    if (result.tasks) {
                        result.tasks.forEach(element => {
                            filteredtasks.push(element.name)
                        });
                    }

                }
            })
            res(filteredtasks)
        }).catch(err => rej(err.message))
    })
}

export function getTaskDesc(userId, colName, taskName) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let desc = ''
            data.forEach(result => {
                if (result.name === colName) {
                    if (result.tasks) {
                        result.tasks.forEach(element => {
                            if (element.name === taskName) {
                                desc = element.desc
                            }
                        });
                    }
                }
            })
            res(desc)
        }).catch(err => rej(err.message))
    })
}

export function getCols(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let cols = []
            data.forEach(result => {
                cols.push(result.name)
            });
            //console.log(cols)
            res(cols)
        }).catch(err => rej(err.message))
    })
}


export function editCol(userId, colName, newColName) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let index = data.findIndex(result => result.name === colName)
            data[index].name = newColName
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function editTask(userId, colName, taskName, newTaskName, newDesc) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let index1 = data.findIndex(element => element.name === colName)
            if (data[index1].tasks){
                let index2 = data[index1].tasks.findIndex(element => element.name === taskName)
                data[index1].tasks[index2].name = newTaskName
                data[index1].tasks[index2].desc = newDesc
            }
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function delCol(userId, colName) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let index = data.findIndex(result => result.name === colName)
            data.splice(index, 1)
            set(refUser, data)
            res(data)
        }).catch(err => rej(err.message))
    })
}


export function delTask(userId, colName, taskName) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/col`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            let index1 = data.findIndex(element => element.name === colName)
            if (data[index1].tasks){
                let index2 = data[index1].tasks.findIndex(element => element.name === taskName)
                data[index1].tasks.splice(index2, 1)
            }
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })
}
