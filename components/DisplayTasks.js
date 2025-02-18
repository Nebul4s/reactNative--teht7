import {
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import { useTodo } from "../context/TodoContext";
import React from "react";

const screenWidth = Dimensions.get("window").width;

const DisplayTasks = () => {
  const { state, dispatch } = useTodo();

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <FlatList
      data={state.todos}
      style={styles.list}
      renderItem={({ item }) => (
        <Pressable onPress={() => removeTodo(item.id)} style={styles.item}>
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DisplayTasks;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    marginBottom: 12,
    width: screenWidth - 24,
    backgroundColor: "#aaa",
    padding: 12,
  },
  itemText: {
    fontSize: 24,
  },
});
