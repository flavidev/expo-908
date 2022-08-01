import { View, Text } from "@aws-amplify/ui-react";
import React from "react";

export default function IdCard() {
  return (
    <View style={styles.container}>
      <Text>IdCard</Text>
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
