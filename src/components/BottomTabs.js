import React from "react";
import {
  IconCalendarToday,
  IconPerson,
  IconSportsSoccer,
} from "@aws-amplify/ui-react";
import { Button } from "@aws-amplify/ui-react";

const BottomTabs = (props) => {
  return (
    <div style={styles.container}>
      <Button
        isFullWidth={true}
        className="selector-small-button"
        style={styles.tabContainer}
        onClick={props.setIsTimeline}
      >
        <IconCalendarToday style={styles.icon} />
        Mural
      </Button>

      <Button
        isFullWidth={true}
        className="selector-small-button"
        style={styles.tabContainer}
        onClick={props.setIsClasses}
      >
        <IconSportsSoccer style={styles.icon} />
        Aulas
      </Button>
      <Button
        isFullWidth={true}
        className="selector-small-button"
        style={styles.tabContainer}
        onClick={props.setIsAccount}
      >
        <IconPerson style={styles.icon} />
        Conta
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    fontSize: "1.5rem",
  },
};

export default BottomTabs;
