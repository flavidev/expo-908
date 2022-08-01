import { View, Text } from "@aws-amplify/ui-react";
import React from "react";

export default function Partners() {
  return (
    <View style={styles.container}>
      <Text>Partners</Text>
    </View>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
