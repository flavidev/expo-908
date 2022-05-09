import React, { useState, useEffect } from "react";
import { Button, Heading, ScrollView } from "@aws-amplify/ui-react";

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

          {currentDay === "" && (
            <div className="container">
              <Heading level={5}>Escolha o dia da semana no menu acima</Heading>
            </div>
          )}

          {currentDay !== "" && (
            <>
              <div style={styles.headerContainer}>
                <Heading level={5} fontFamily="azonix">
                  {days[currentDay]}
                </Heading>
              </div>
              <ScrollView style={styles.calendarScrollView}>
                {data.body[currentDay].events.map((item, index) => {
                  return (
                    <ClassCard
                      key={index}
                      title={item.title}
                      day={data.body[currentDay].day}
                      starts={item.starts}
                      ends={item.ends}
                      availableSpots={item.availableSpots}
                      isAdmin={isAdmin}
                    />
                  );
                })}

                {data.body[currentDay].events.length < 1 && (
                  <div className="container">
                    <Heading level={4}>Hoje não tem aula</Heading>
                  </div>
                )}
              </ScrollView>
            </>
          )}

          {isAdmin && (
            <Button
              style={styles.submitButton}
              onClick={() => handleOpenAddClass()}
            >
              Adicionar aula
            </Button>
          )}
        </>
      )}

      {isAddClass && (
        <AddClass
          user={props.user}
          days={days}
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  submitButton: {
    backgroundColor: "#fff",
    margin: "2.5vh 0",
  },
};

export default Classes;
