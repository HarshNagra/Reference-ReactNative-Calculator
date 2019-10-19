import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

// import Row, Button and calculator


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default class App extends React.Component {
  state = initialState;

  //Implement handleTap method here 

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>

          {/* Implement text area here */}

          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            {/* Implement buttons 7,8,9,* here */}
          </Row>

          <Row>
            {/* Implement buttons 4,5,6,- here */}
          </Row>

          <Row>
            {/* Implement buttons 1,2,3,+ here */}
          </Row>

          <Row>
            {/* Implement buttons 0, . , = here */}
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
