import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ConnectVue } from '../vues/connectVue';
import { InscriptionVue } from '../vues/inscriptionVue';
const Tab = createMaterialTopTabNavigator()
export function UserRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="connect" component={ConnectVue} />
            <Tab.Screen name="inscription" component={InscriptionVue} />
        </Tab.Navigator>
    )
}