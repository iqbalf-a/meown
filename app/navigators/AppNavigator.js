import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import AuthStack from "./AuthStack";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Splash"} component={Splash} />
                <Stack.Screen name={"Auth Stack"} component={AuthStack} />
                <Stack.Screen name={"Main Tab"} component={MainTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator