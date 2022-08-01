import React, { useState, useEffect, useContext } from "react";
import { getClasses } from "../api/API";

import { UserContext } from "../pages/Main";

import AddClass from "./AddClass";

import {
  View,
  Text,
  Flex,
  Heading,
  ScrollView,
  Image,
} from "@aws-amplify/ui-react";
import { Spinner } from "../components/Spinner";
import { ClassCard } from "../components/ClassCard";
import { CircleButton } from "../components/CircleButton";
import { RoundDayButton } from "../components/RoundDayButton";
import { AiFillPlusCircle } from "react-icons/ai";

import cima from "../assets/images/cima.png";
import dayOff from "../assets/images/folga.png";

const Classes = (props) => {
  const { user } = useContext(UserContext);

  const isAdmin = user.isAdmin;
  const userId = user.sub;

  const [currentDay, setCurrentDay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAddClass, setIsAddClass] = useState(false);
  const [data, setData] = useState([]);
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    try {
      const response = await getClasses();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  const handleOpenAddClass = () => {
    setIsAddClass(true);
  };

  const handleCloseAddClass = () => {
    setIsAddClass(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && <Spinner />}

      {data && !isLoading && !isAddClass && (
        <>
          <View style={styles.buttonContainer}>
            {weekDays.map((day, index) => (
              <RoundDayButton
                size="small"
                text={day}
                key={index}
                isFullWidth={true}
                onClick={() => (getData(), setCurrentDay(index))}
              ></RoundDayButton>
            ))}
          </View>

          {currentDay === "" && (
            <View style={styles.container}>
              <Image
                onClick={() => alert("Escolha um dia da semana no menu acima")}
                src={cima}
                style={{ maxHeight: "35vh" }}
                className="bouncing"
              />
              <Text style={styles.menuText}>
                Escolha um dia acima, {user.given_name}!
              </Text>
            </View>
          )}

          {currentDay !== "" && (
            <>
              <View style={styles.headerContainer}>
                <Heading style={styles.header}>
                  {days[currentDay]}
                  {data.body.filter((element) => element.day == currentDay)
                    .length > 0 &&
                    " tem " +
                      data.body.filter((element) => element.day == currentDay)
                        .length +
                      ` aula${
                        data.body.filter((element) => element.day == currentDay)
                          .length > 1
                          ? "s"
                          : ""
                      }`}
                </Heading>
              </View>
              <ScrollView style={styles.calendarScrollView}>
                {data.body
                  .filter((element) => element.day == currentDay)
                  .sort((a, b) => a.hour - b.hour)
                  .map((item, index) => (
                    <ClassCard
                      key={index}
                      id={item.classesId}
                      type={item.type}
                      day={item.day}
                      hour={item.hour}
                      minutes={item.minutes}
                      duration={item.duration}
                      spots={item.spots}
                      isAdmin={isAdmin}
                      userId={userId}
                      refreshClasses={getData}
                      confirmed={item.confirmed}
                    />
                  ))}

                {data.body.filter((element) => element.day == currentDay)
                  .length === 0 && (
                  <Flex
                    style={{
                      justifyContent: "center",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <CircleButton
                      text="Dia de folga"
                      onClick={() => alert("Não há aulas para este dia")}
                    >
                      <Image src={dayOff} style={{ width: "30vw" }} />
                    </CircleButton>
                  </Flex>
                )}
              </ScrollView>
            </>
          )}

          {isAdmin && currentDay !== "" && (
            <AiFillPlusCircle
              style={styles.icon}
              onClick={() => handleOpenAddClass()}
            />
          )}
        </>
      )}

      {isAddClass && (
        <AddClass
          user={props.user}
          days={days}
          handleCloseAddClass={handleCloseAddClass}
          currentDay={currentDay}
          refreshClasses={getData}
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100%",
  },

  buttonContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },
  header: {
    fontFamily: "azonix",
    fontSize: "1.5rem",
  },

  calendarScrollView: {
    display: "flex",
    height: "100%",
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "2.5rem",
    margin: "1rem",
    color: "#fff",
  },
  menuText: {
    fontFamily: "azonix",
    fontSize: "1rem",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Classes;
