import { useState } from "react";
import { createClass } from "../api/API";

import { SliderField, Heading } from "@aws-amplify/ui-react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

import { v4 } from "uuid";

function AddClass(props) {
  //const userId = props.user.sub;

  const refreshClasses = props.refreshClasses;

  const { handleCloseAddClass, days, currentDay } = props;

  const [newClass, setNewClass] = useState({
    classesId: v4(),
    type: "Altinha",
    hour: "08",
    minutes: "00",
    day: currentDay,
    duration: "60",
    spots: "12",
  });

  //const [isLoading, setIsLoading] = useState(false);

  const typeOfClass = ["Altinha", "Futevôlei"];

  function handleChangeType(value) {
    setNewClass({ ...newClass, type: typeOfClass[value] });
  }

  function handleChangeHour(value) {
    setNewClass({
      ...newClass,
      hour: parseInt(value) < 10 ? `0${value}` : value,
    });
  }

  function handleChangeMinutes(value) {
    setNewClass({
      ...newClass,
      minutes: parseInt(value) < 10 ? `0${value}` : value,
    });
  }

  function handleChangeDuration(value) {
    setNewClass({ ...newClass, duration: value });
  }

  function handleChangeSpots(value) {
    setNewClass({ ...newClass, spots: value });
  }

  const handleSubmit = async () => {
    if (
      window.confirm(
        `Deseja confirmar ${newClass.type.toLowerCase()} de ${days[
          newClass.day
        ].toLowerCase()} às ${newClass.hour}:${newClass.minutes} com ${
          newClass.duration
        } minutos de duração e ${newClass.spots} vagas?`
      )
    ) {
      await createClass(newClass);
      handleCloseAddClass();
      await refreshClasses();
    }
  };

  return (
    <div className="container">
      <div style={styles.headerContainer}>
        <Heading level={4} fontFamily="azonix">
          {days[currentDay]}
        </Heading>
      </div>

      <div style={styles.addClassContainer}>
        <SliderField
          filledTrackColor={"#fff"}
          label={newClass.type}
          min={0}
          max={typeOfClass.length - 1}
          step={1}
          value={typeOfClass.indexOf(newClass.type)}
          isValueHidden={true}
          onChange={handleChangeType}
        />

        <SliderField
          min={0}
          max={23}
          step={1}
          label="Hora"
          onChange={handleChangeHour}
          value={newClass.hour}
        />
        <SliderField
          min={0}
          max={55}
          step={5}
          label="Minutos"
          onChange={handleChangeMinutes}
          value={newClass.minutes}
        />
        <SliderField
          min={0}
          max={120}
          step={5}
          label="Duração (minutos)"
          onChange={handleChangeDuration}
          value={newClass.duration}
        />
        <SliderField
          min={1}
          max={20}
          step={1}
          label="Vagas"
          onChange={handleChangeSpots}
          value={newClass.spots}
        />
      </div>
      <div style={styles.bottomContainer}>
        <RiArrowGoBackFill onClick={handleCloseAddClass} style={styles.icon} />
        <GiConfirmed onClick={handleSubmit} style={styles.icon} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100%",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },

  title: {
    color: "#fff",
  },
  addClassContainer: {
    display: "flex",
    flex: 5,
    flexDirection: "column",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "1rem",
  },
  buttonIcon: {
    color: "#000",
    flexDirection: "column",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: "1.25rem",
    fontFamily: "azonix",
    color: "#fff",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#fff",
  },
};

export default AddClass;
