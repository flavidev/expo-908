import {
  Image,
  View,
  Divider,
  Heading,
  ScrollView,
} from "@aws-amplify/ui-react";

import { Avatar } from "./Avatar";
import { CircleButton } from "./CircleButton";
//import { GiSoccerKick } from "react-icons/gi";
//import { AiOutlineTable } from "react-icons/ai";
import { BsSquare, BsCheckSquare } from "react-icons/bs";

import altinha from "../assets/images/altinha.png";
import futevolei from "../assets/images/futevolei.png";

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
    <View style={styles.container}>
      <View style={styles.cardRow}>
        <View style={styles.circleButtonContainer}>
          <CircleButton
            text={event.type}
            size="small"
            theme="dark"
            onClick={() => handleDeleteClass()}
          >
            {event.type == "Altinha" ? (
              <Image src={altinha} style={{ width: "25vw" }} />
            ) : (
              <Image src={futevolei} style={{ width: "25vw" }} />
            )}
          </CircleButton>
        </View>

        <View style={styles.headerContainer}>
          <Heading style={styles.timeText}>
            {props.hour}:{props.minutes}
          </Heading>
          <Heading style={styles.descriptionText}>{props.spots} vagas</Heading>
        </View>

        <View style={styles.checkBoxContainer}>
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
        </View>
      </View>
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
    </View>
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
  descriptionText: {
    fontFamily: "Azonix",
    color: "#000",
    fontSize: "1rem",
    margin: "0.15rem",
  },
  timeText: {
    fontFamily: "Azonix",
    color: "#000",
    fontSize: "1.75rem",
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
