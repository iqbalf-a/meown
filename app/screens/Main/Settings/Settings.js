import {Button, Text, View} from "react-native";

const Settings = (props) => {
    const onLogout = () => {
        props.navigation.navigate("Auth Stack")
    }
    return (
        <View>
            <Text>
                Settings
            </Text>
            <Button title={"Logout"} onPress={onLogout}/>
        </View>
    )
}

export default Settings