import React from "react";
import { Button } from "@aws-amplify/ui-react";

const plans = [
  {
    name: "Uma vez por semana",
    price: "R$ 29,90",
    weeklyCredits: 1,
  },
  {
    name: "Duas vezes por semana",
    price: "R$ 59,90",
    weeklyCredits: 2,
  },
  {
    name: "Três vezes por semana",
    price: "R$ 89,90",
    weeklyCredits: 3,
  },
];
//import an object containing available plans and map them to a list of buttons

function Plans() {
  return (
    <div className="container">
      {plans.map((plan, index) => (
        <div style={styles.planContainer} key={index}>
          <Button
            style={styles.button}
            isFullWidth={true}
            onClick={() => {
              console.log("clicked");
            }}
          >
            {plan.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  planContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    color: "#000",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    height: "7.5vh",
    width: "70vw",
    borderRadius: "5px",
    border: "1px solid #000",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Plans;
