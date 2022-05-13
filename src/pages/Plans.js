import React, { useState } from "react";

import { CircleButton } from "../components/CircleButton";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { FaPeopleArrows } from "react-icons/fa";

const Plans = () => {
  const [plan, setPlan] = useState(null);

  const handleSetPlan = (plan) => {
    setPlan(plan);
  };

  return (
    <div style={styles.container}>
      {!plan && (
        <>
          <div style={styles.buttonsRow}>
            <CircleButton onClick={handleSetPlan} text="Semanal">
              <RiNumber1 style={styles.icon} />
            </CircleButton>
            <CircleButton onClick={handleSetPlan} text="Semanal">
              <RiNumber2 style={styles.icon} />
            </CircleButton>
          </div>
          <div style={styles.buttonsRow}>
            <CircleButton onClick={handleSetPlan} text="Semanal">
              <RiNumber3 style={styles.icon} />
            </CircleButton>
            <CircleButton onClick={handleSetPlan} text="Particular">
              <FaPeopleArrows style={styles.icon} />
            </CircleButton>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsRow: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "0 4rem",
    alignItems: "center",
  },
  areaContainer: {
    height: "100%",
  },

  icon: {
    margin: "0.5rem",
    fontSize: "3rem",
  },
};

export default Plans;
