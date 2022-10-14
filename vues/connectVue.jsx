import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, Keyboard, SafeAreaView } from 'react-native'
import { connectUser } from '../api/auth';
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { TodoContext } from '../context';
import { styles } from '../styles';

export function ConnectVue() {
    const [login, setlogin] = useState("");
    const [mdp, setmdp] = useState("");
    const { setuser } = useContext(TodoContext);
    const handleClick = () => {
        Keyboard.dismiss()
        connectUser(login, mdp).then(data => {
            setuser(data);
        }).catch(err => Alert.alert(err))
    }
    return (
        <SafeAreaView style={styles.safe}>

            <View style={styles.contConnect}>
                <MyInput label={"Email"} valeur={login} etat={setlogin} />
                <MyInput label={"Mot de passe"} valeur={mdp} etat={setmdp} secure={true}/>
                <MyBout label="Valider" click={handleClick} />

            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}