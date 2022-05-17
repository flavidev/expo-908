import React, { useState, useEffect } from "react";
import { getClasses } from "../api/API";

import AddClass from "./AddClass";

import { Heading, ScrollView } from "@aws-amplify/ui-react";
import { Spinner } from "../components/Spinner";
import { ClassCard } from "../components/ClassCard";
import { CircleButton } from "../components/CircleButton";
import { RoundDayButton } from "../components/RoundDayButton";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImPointUp } from "react-icons/im";
import { GiNightSleep } from "react-icons/gi";

const Classes = (props) => {
  const isAdmin = props.user.isAdmin;

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
    <div style={styles.container}>
      {isLoading && <Spinner />}

      {data && !isLoading && !isAddClass && (
        <>
          <div style={styles.buttonContainer}>
            {weekDays.map((day, index) => (
              <RoundDayButton
                size="small"
                text={day}
                key={index}
                className="week-calendar-button"
                isFullWidth={true}
                onClick={() => (getData(), setCurrentDay(index))}
              ></RoundDayButton>
            ))}
          </div>

          {currentDay === "" && (
            <div className="container">
              <CircleButton
                text="Selecione um dia"
                onClick={() => alert("Escolha um dia da semana no menu acima")}
              >
                <ImPointUp style={{ fontSize: "3.5rem" }} />
              </CircleButton>
            </div>
          )}

          {currentDay !== "" && (
            <>
              <div style={styles.headerContainer}>
                <Heading level={5} fontFamily="azonix">
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
              </div>
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
                      refreshClasses={getData}
                    />
                  ))}

                {data.body.filter((element) => element.day == currentDay)
                  .length === 0 && (
                  <div className="container">
                    <CircleButton
                      text="Dia de folga"
                      onClick={() => alert("Não há aulas para este dia")}
                    >
                      <GiNightSleep style={{ fontSize: "3.5rem" }} />
                    </CircleButton>
                  </div>
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
    </div>
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
};

export default Classes;
