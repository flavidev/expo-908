import React, { useState, useContext } from "react";
import { UserContext } from "./Main";

import {
  View,
  Text,
  TextField,
  SelectField,
  TextAreaField,
  ScrollView,
} from "@aws-amplify/ui-react";

import { MdSend } from "react-icons/md";
import { FaUndo } from "react-icons/fa";

import { updateUserAttributes } from "../api/API";

function UserProfile() {
  const { user, setUser, setMainState, loading } = useContext(UserContext);

  const [given_name, setGivenName] = useState(user.given_name);
  const [name, setName] = useState(user.name);
  const [phone_number, setPhoneNumber] = useState(user.phone_number);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const [gender, setGender] = useState(user.gender);
  const [address, setAddress] = useState(user.address);

  const handleUpdateUser = async () => {
    try {
      loading(true);

      setUser({
        ...user,
        given_name,
        name,
        phone_number,
        birthdate,
        gender,
        address,
      });
      await updateUserAttributes({
        given_name,
        name,
        phone_number,
        birthdate,
        gender,
        address,
      });

      loading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiscardChanges = () => {
    loading(true);
    setMainState("account");
    setTimeout(() => {
      setMainState("profile");
      loading(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainPanel}>
        <Text style={styles.title}>
          Clique na foto de perfil para atualizar
        </Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>Nome</Text>
          <TextField
            style={styles.input}
            placeholder={given_name}
            onChange={(e) => setGivenName(e.target.value)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>Sobrenome</Text>
          <TextField
            style={styles.input}
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>Nascimento</Text>
          <TextField
            style={styles.input}
            type="date"
            placeholder={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>Gênero</Text>
          <SelectField
            name="gender"
            style={styles.input}
            value={gender}
            placeholder="Selecione o gênero"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="indeterminado">Prefiro não informar</option>
          </SelectField>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>WhatsApp</Text>
          <TextField
            style={styles.input}
            type="number"
            placeholder={phone_number}
            onChange={(e) => setPhoneNumber("+" + e.target.value)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldText}>Endereço</Text>
          <TextAreaField
            style={styles.input}
            placeholder={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonsMenu}>
        <FaUndo style={styles.button} onClick={handleDiscardChanges} />
        <MdSend
          style={styles.button}
          onClick={() => {
            console.log(user);
            if (
              window.confirm(
                "Deseja realmente atualizar os dados do seu perfil?"
              )
            ) {
              handleUpdateUser();
            }
          }}
        />
      </View>
    </View>
  );
}

export default UserProfile;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100vw",
    height: "100%",
    justifyContent: "space-between",
  },
  mainPanel: {
    display: "flex",
    flex: 6,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    width: "100%",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  fieldText: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginRight: "1rem",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "1rem",
    color: "#fff",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsMenu: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    display: "flex",
    fontSize: "2rem",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
  },
};
