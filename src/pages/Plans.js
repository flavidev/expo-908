import React from "react";
import { Text } from "@aws-amplify/ui-react";

//import an object containing available plans and map them to a list of buttons

function Plans() {
  return (
    <div className="container">
      <Text className="small-text">
        Caixa de seleção com os planos disponíveis para o usuário.
      </Text>
    </div>
  );
}

export default Plans;
