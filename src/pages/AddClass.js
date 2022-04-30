import { useState } from "react";
import { Button, SliderField, Image } from "@aws-amplify/ui-react";

import arrow from "../assets/images/arrow-back.png";

function AddClass(props) {
  //const userId = props.user.sub;
  const handleCloseAddClass = props.handleCloseAddClass;
  const currentDay = props.currentDay;
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const [newClass, setNewClass] = useState({
    hour: "8",
    minutes: "00",
    day: currentDay,
    duration: "60",
    spots: "12",
  });

  function handleChangeHour(value) {
    setNewClass({ ...newClass, hour: value });
  }

  function handleChangeMinutes(value) {
    setNewClass({ ...newClass, minutes: value });
  }

  function handleChangeDuration(value) {
    setNewClass({ ...newClass, duration: value });
  }

  function handleChangeSpots(value) {
    setNewClass({ ...newClass, spots: value });
  }

  const handleSubmit = () => {
    if (
      window.confirm(
        `Deseja confirmar a aula de ${days[newClass.day].toLowerCase()} às ${
          newClass.hour
        }:${newClass.minutes} com ${newClass.duration} minutos de duração e ${
          newClass.spots
        } vagas?`
      )
    ) {
      handleCloseAddClass();
    }
  };

  return (
    <div className="container">
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>{days[currentDay]}</h2>
      </div>

      <div style={styles.addClassContainer}>
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
        <Image
          src={arrow}
          style={styles.goBackArrow}
          onClick={handleCloseAddClass}
        />
        <Button style={styles.button} onClick={handleSubmit}>
          Confirmar
        </Button>
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
  titleContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "5vh",
    backgroundColor: "#000",
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
  button: {
    backgroundColor: "#fff",
  },
  bottomContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  goBackArrow: {
    width: "12.5vw",
    maxWidth: "50px",
  },
};

export default AddClass;
