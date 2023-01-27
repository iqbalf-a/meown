import {Button, Text, View} from "react-native";

const Login = (props) => {
    const onNavigateToRegister = () => {
        props.navigation.navigate("Register")
    }
    const onSubmit = () => {
        props.navigation.navigate("Main Tab")
    }
    return (
        <View>
            <Text>
                Login
            </Text>
            <Button title={"Register"} onPress={onNavigateToRegister}/>
            <Button title={"Login"} onPress={onSubmit}/>
        </View>
    )
}

export default Login;