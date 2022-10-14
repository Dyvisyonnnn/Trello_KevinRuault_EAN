import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ListTaskVue } from '../vues/listTaskVue';
import { NewTask } from '../vues/newTask';
const Tab = createMaterialTopTabNavigator()
export function TodoRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Liste" component={ListTaskVue} />
            {/*<Tab.Screen name="newTask" component={NewTask} /> */}
        </Tab.Navigator>
    )
}