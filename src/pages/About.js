import { View } from "@aws-amplify/ui-react";
import React from "react";

export default function About() {
  return <View style={styles.container}></View>;
}

const styles = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headingContainer: {
    flex: 1,
    display: "flex",
    maxWidth: "90vw",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    flex: 10,
    maxHeight: "55vh",
    maxWidth: "90vw",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "0 15px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2vh",
  },
  description: {
    fontSize: "1.1rem",
    color: "#000",
  },
};
