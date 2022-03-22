import React, { useState } from "react";
import { useAxios } from "use-axios-client";
import { Button, ScrollView, Text } from "@aws-amplify/ui-react";

import { ClassCard } from "../components/ClassCard";
import { Spinner } from "../components/Spinner";

const Classes = () => {
  const [currentDay, setCurrentDay] = useState("");

  const { data, loading, error } = useAxios({
    url: "https://v2ph0dafi3.execute-api.sa-east-1.amazonaws.com/dev/eae/classes",
    method: "GET",
  });

  if (loading || !data)
    return (
      <div style={styles.container}>
        <Spinner />;
      </div>
    );
  if (error) return "Error!";

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(0)}
        >
          D
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(1)}
        >
          2ª
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(2)}
        >
          3ª
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(3)}
        >
          4ª
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(4)}
        >
          5ª
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(5)}
        >
          6ª
        </Button>
        <Button
          className="week-calendar-button"
          isFullWidth={true}
          onClick={() => setCurrentDay(6)}
        >
          S
        </Button>
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
          </>
        )}
      </ScrollView>
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
