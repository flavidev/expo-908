import { Divider, Heading, ScrollView } from "@aws-amplify/ui-react";

import { Avatar } from "./Avatar";
import { CircleButton } from "./CircleButton";
import { GiSoccerKick } from "react-icons/gi";
import { AiOutlineTable } from "react-icons/ai";
import { BsSquare, BsCheckSquare } from "react-icons/bs";

import { deleteClass, joinClass } from "../api/API";

export const ClassCard = (props) => {
  const event = {
    userId: props.userId,
    isAdmin: props.isAdmin,
    id: props.id,
    type: props.type,
    day: props.day,
    hour: props.hour,
    minutes: props.minutes,
    duration: props.duration,
    spots: props.spots,
    confirmed: props.confirmed,
  };

  const handleJoinClass = async () => {
    await joinClass(event.id, event.userId);
    await props.refreshClasses();
  };

  const handleRemoveFromClass = async (id) => {
    const userId = id;
    await joinClass(event.id, userId);
    await props.refreshClasses();
  };

  const handleDeleteClass = async () => {
    if (event.isAdmin) {
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
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardRow}>
        <div style={styles.circleButtonContainer}>
          <CircleButton
            text={event.type}
            size="small"
            theme="dark"
            onClick={() => handleDeleteClass()}
          >
            {event.type == "Altinha" ? (
              <GiSoccerKick style={styles.icon} />
            ) : (
              <AiOutlineTable style={styles.icon} />
            )}
          </CircleButton>
        </div>

        <div style={styles.headerContainer}>
          <Heading level={3} style={styles.headerText}>
            {props.hour}:{props.minutes}
          </Heading>
          <Heading level={5} style={styles.headerText}>
            {props.spots} vagas
          </Heading>
        </div>

        <div style={styles.checkBoxContainer}>
          {event.confirmed.includes(event.userId) ? (
            <BsCheckSquare
              onClick={() => handleJoinClass()}
              style={styles.iconBlack}
            />
          ) : (
            <BsSquare
              onClick={() => handleJoinClass()}
              style={styles.iconBlack}
            />
          )}
        </div>
      </div>
      <Divider orientation="horizontal" border={"1px dashed #000 "} />
      <ScrollView style={styles.avatarRow}>
        {event.confirmed.map((userId, index) => (
          <Avatar
            key={index}
            userId={userId}
            size="small"
            onClick={() => {
              event.isAdmin && handleRemoveFromClass(userId);
            }}
          />
        ))}
      </ScrollView>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "90%",
    border: "1px solid #000",
    borderRadius: "10px",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem",
  },
  cardRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem",
  },
  avatarRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    maxWidth: "100%",
    alignItems: "center",
    margin: "0.5rem",
  },
  circleButtonContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1.5,
    alignItems: "center",
  },
  checkBoxContainer: {
    display: "flex",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontFamily: "Azonix",
    color: "#000",
    margin: "0.15rem",
  },
  icon: {
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "#fff",
  },
  iconBlack: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#000",
  },
};
