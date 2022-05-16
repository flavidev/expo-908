import { deleteClass } from "../api/API";

import { AiFillMinusCircle } from "react-icons/ai";
import { CircleButton } from "./CircleButton";
import { GiSoccerKick, GiFishingNet } from "react-icons/gi";
import { Heading } from "@aws-amplify/ui-react";

export const ClassCard = (props) => {
  const event = {
    id: props.id,
    type: props.type,
    day: props.day,
    hour: props.hour,
    minutes: props.minutes,
    duration: props.duration,
    spots: props.spots,
    isAdmin: props.isAdmin,
    //    confirmed: props.confirmed
  };

  const handleDeleteClass = async () => {
    if (
      window.confirm(
        `Confirma a remoção da aula de ${event.type.toLowerCase()} que começaria às ${
          event.hour
        }:${event.minutes}`
      )
    ) {
      await deleteClass({ id: event.id });
      await props.refreshClasses();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardRow}>
        <div style={styles.circleButtonContainer}>
          <CircleButton text={event.type} size="small">
            {event.type == "Altinha" ? (
              <GiSoccerKick style={styles.icon} />
            ) : (
              <GiFishingNet style={styles.icon} />
            )}
          </CircleButton>
        </div>

        <div style={styles.headerContainer}>
          <Heading level={3} style={styles.headerText}>
            {props.hour}:{props.minutes}
          </Heading>
          <Heading level={6} style={styles.headerText}>
            {props.spots} vagas
          </Heading>
        </div>

        {event.isAdmin && (
          <div
            style={{
              display: "flex",
              flex: 0.5,
              justifyContent: "center",
            }}
          >
            <AiFillMinusCircle
              style={styles.iconBlack}
              onClick={() => handleDeleteClass()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "90vw",
    border: "1px solid #000",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    margin: "1rem",
  },
  cardRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  circleButtonContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontFamily: "Azonix",
    color: "#000",
    margin: "0.15rem",
  },

  icon: {
    fontSize: "3rem",
    cursor: "pointer",
    color: "#fff",
  },
  iconBlack: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#a00",
  },
};
