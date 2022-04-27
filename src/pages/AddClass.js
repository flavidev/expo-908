import { Button, SliderField, Image } from "@aws-amplify/ui-react";

import arrow from "../assets/images/arrow-back.png";

function AddClass(props) {
  const userId = props.user.sub;
  const handleCloseAddClass = props.handleCloseAddClass;
  const currentDay = props.currentDay;
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return (
    <div className="container">
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>{days[currentDay]}</h2>
      </div>

      <div style={styles.addClassContainer}>
        <SliderField min={0} max={23} step={1} label="Hora" />
        <SliderField
          min={0}
          max={55}
          hiddenLabel={false}
          step={5}
          label="Minutos"
        />
        <SliderField min={0} max={120} step={5} label="Duração (minutos)" />
        <SliderField min={1} max={20} step={1} label="Vagas" />
      </div>
      <div style={styles.bottomContainer}>
        <Image
          src={arrow}
          style={styles.goBackArrow}
          onClick={handleCloseAddClass}
        />
        <Button style={styles.button} onClick={() => console.log(userId)}>
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
    height: "10vh",
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
  },
};

export default AddClass;
