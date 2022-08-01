import { useState, useContext } from "react";
import { UserContext } from "./Main";

import { createClass } from "../api/API";

import { View, SliderField, Heading, SelectField } from "@aws-amplify/ui-react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

import { v4 } from "uuid";

function AddClass(props) {
  const user = useContext(UserContext);
  const userId = user.sub;

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
    confirmed: [userId],
  });

  //const [isLoading, setIsLoading] = useState(false);

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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading style={styles.title}>{days[currentDay]}</Heading>
      </View>

      <View style={styles.addClassContainer}>
        <SelectField
          options={["Altinha", "Futevôlei"]}
          labelHidden
          onChange={(e) => setNewClass({ ...newClass, type: e.target.value })}
          value={newClass.type}
          style={styles.classSelector}
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
          max={180}
          step={5}
          label="Duração (minutos)"
          onChange={handleChangeDuration}
          value={newClass.duration}
        />
        <SliderField
          min={1}
          max={30}
          step={1}
          label="Vagas"
          onChange={handleChangeSpots}
          value={newClass.spots}
        />
      </View>
      <View style={styles.bottomContainer}>
        <RiArrowGoBackFill onClick={handleCloseAddClass} style={styles.icon} />
        <GiConfirmed onClick={handleSubmit} style={styles.icon} />
      </View>
    </View>
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
    fontSize: "1.5rem",
    fontFamily: "Azonix",
  },

  classSelector: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: "1.25rem",
    fontFamily: "Azonix",
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
