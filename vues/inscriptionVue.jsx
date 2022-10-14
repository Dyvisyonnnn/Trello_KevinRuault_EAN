import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native'
import { createUser } from '../api/auth';
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { TodoContext } from '../context';
import { styles } from '../styles';

export function InscriptionVue() {
    const [login, setlogin] = useState("");
    const [mdp, setmdp] = useState("");
    const [mdp2, setmdp2] = useState("");
    const { setuser } = useContext(TodoContext);
    const handleClick = () => {
        Keyboard.dismiss()
        if (mdp === mdp2) {
            createUser(login, mdp).then(data => {
                setuser(data);
            }).catch(err => Alert.alert('Error:', err.message))
        } else {
            Alert.alert("Les mots de passe sont differents")
        }
    }
    return (
        <SafeAreaView style={styles.safe}>


            <View style={styles.contConnect}>
                <MyInput label={"Email"} valeur={login} etat={setlogin} />
                <MyInput label={"Mot de passe"} valeur={mdp} etat={setmdp} secure={true} />
                <MyInput label={"Confirmez"} valeur={mdp2} etat={setmdp2} secure={true} />
                <MyBout label="Valider" click={handleClick} />

            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}