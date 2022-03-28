import { ScrollView } from "@aws-amplify/ui-react";
import React from "react";

const Timeline = () => {
  return (
    <div className="container">
      <ScrollView
        orientation="vertical"
        height={"60vh"}
        style={styles.scrollview}
      >
        <p style={styles.description}>
          Não haverá aula nessa próxima quarta (1/1) devida à chuva!
        </p>
        <p style={styles.description}>
          As camisas serão distribuídas por ordem de chegada
        </p>
        <p style={styles.description}>
          O prazo para agendamento das aulas é de até 45 minutos antes do início
          da mesma.
        </p>
      </ScrollView>
    </div>
  );
};

const styles = {
  scrollview: {
    margin: "0 5%",
  },
  description: {
    borderRadius: "5px",
    fontSize: "1.1rem",
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    margin: "10",
  },
};
export default Timeline;
