import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../../utils/Colors";

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

            <TouchableOpacity onPress={onSubmit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.baseColor,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        borderRadius: 50,
        elevation: 5
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Login;