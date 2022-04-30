import React, { useState, useEffect } from "react";
import { Button, ScrollView, Text } from "@aws-amplify/ui-react";

import AddClass from "./AddClass";
import { getClasses } from "../api/API";

import { ClassCard } from "../components/ClassCard";
import { Spinner } from "../components/Spinner";

const Classes = (props) => {
  const isAdmin = props.user.isAdmin;

  const [currentDay, setCurrentDay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAddClass, setIsAddClass] = useState(false);
  const [data, setData] = useState([]);
  const weekDays = ["D", "2ª", "3ª", "4ª", "5ª", "6ª", "S"];

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
              <Button
                key={index}
                className="week-calendar-button"
                isFullWidth={true}
                onClick={() => setCurrentDay(index)}
              >
                {day}
              </Button>
            ))}
          </div>

          <ScrollView style={styles.calendarContainer}>
            {currentDay === "" && (
              <div>
                <Text className="small-text">
                  Escolha o dia da semana no menu acima
                </Text>
              </div>
            )}

            {currentDay !== "" && (
              <>
                {data.body[currentDay].events.length < 1 && (
                  <div style={styles.calendarItem}>
                    <Text className="small-text-black">
                      {" "}
                      {data.body[currentDay].day} não tem aula
                    </Text>
                  </div>
                )}

                {data.body[currentDay].events.map((item, index) => {
                  return (
                    <ClassCard
                      key={index}
                      title={item.title}
                      day={data.body[currentDay].day}
                      starts={item.starts}
                      ends={item.ends}
                      availableSpots={item.availableSpots}
                    />
                  );
                })}
                {isAdmin && (
                  <Button
                    style={styles.button}
                    onClick={() => handleOpenAddClass()}
                  >
                    Criar Aula
                  </Button>
                )}
              </>
            )}
          </ScrollView>
        </>
      )}

      {isAddClass && (
        <AddClass
          user={props.user}
          handleCloseAddClass={handleCloseAddClass}
          currentDay={currentDay}
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
  },

  weekCalendarMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100vw",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
  },
  calendarItem: {
    display: "flex",
    height: "20%",
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px #000",
    backgroundColor: "#fff",
    padding: "5px",
  },
};

export default Classes;
