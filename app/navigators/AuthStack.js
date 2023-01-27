import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Register"} component={Register}/>
        </Stack.Navigator>
    )
}

export default AuthStack