import Home from "../screens/Main/Home/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Pet from "../screens/Main/Pet/Pet";
import Settings from "../screens/Main/Settings/Settings";
import Order from "../screens/Main/Order/Order";

const Tabs = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={"Home"} component={Home}/>
            <Tabs.Screen name={"Pet"} component={Pet}/>
            <Tabs.Screen name={"Order"} component={Order}/>
            <Tabs.Screen name={"Settings"} component={Settings}/>
        </Tabs.Navigator>
    )
}

export default MainTab