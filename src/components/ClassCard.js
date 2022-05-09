import {
  Card,
  View,
  Flex,
  Badge,
  Text,
  IconDeleteForever,
  IconLogin,
} from "@aws-amplify/ui-react";

export const ClassCard = (props) => {
  const event = {
    title: props.title,
    day: props.day,
    starts: props.starts,
    ends: props.ends,
    availableSpots: props.availableSpots,
    isAdmin: props.isAdmin,
    type: "Futevôlei",
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Flex justifyContent="space-around">
          <Flex alignItems="center" justifyContent="center" width="100%">
            <Badge>{event.type}</Badge>
            <Text>
              {event.starts} {event.ends}
            </Text>
            <Text textAlign="center">
              Vagas{" "}
              <Badge size="small" margin="0.5rem 0">
                {event.availableSpots}
              </Badge>
            </Text>
          </Flex>
          <Flex alignItems="center">
            <IconLogin
              onClick={() => alert("Em breve 💜")}
              style={styles.icon}
              color="green"
            />
            {event.isAdmin && (
              <IconDeleteForever
                style={styles.icon}
                color="red"
                onClick={() => alert("Aula removida!")}
              />
            )}
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#fff",
    width: "90%",
    height: "22.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    border: "1px solid #000",
    margin: "1rem",
  },
  card: {
    width: "90vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: "3rem",
    cursor: "pointer",
  },
};
