import { StyleSheet, View } from "react-native";
import { TodoContextProvider } from "./context/TodoContext";
import AddNewTask from "./components/AddNewTask";
import DisplayTasks from "./components/DisplayTasks";

export default function App() {
  return (
    <TodoContextProvider>
      <View style={styles.container}>
        <AddNewTask />
        <DisplayTasks />
      </View>
    </TodoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
