import { StyleSheet, TextInput, View, Dimensions, Button } from "react-native";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;

const AddNewTask = () => {
  const { dispatch } = useTodo();
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo) return;

    dispatch({ type: "ADD", payload: todo });
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="save" onPress={addTodo} />
    </View>
  );
};

export default AddNewTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginTop: 56,
    marginBottom: 24,
  },
  input: {
    width: screenWidth - 96,
    height: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
