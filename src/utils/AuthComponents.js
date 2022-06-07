import { View, Image, Text, useAuthenticator } from "@aws-amplify/ui-react";

import logo from "../assets/images/eae-logo.png";

export const formFields = {
  signUp: {
    phone_number: {
      dialCode: "+55",
      isRequired: true,
      label: "WhatsApp (somente números)",
      placeholder: "21999999999",
      labelHidden: false,
    },
    address: {
      label: "Bairro",
      labelHidden: false,
      placeholder: "Copacabana",
      isRequired: true,
    },
    gender: {
      placeholder: "Feminino",
      label: "Gênero",
      labelHidden: false,
      isRequired: true,
    },
    birthdate: {
      label: "Nascimento",
      labelHidden: false,
      isRequired: true,
      width: "100%",
    },
  },
};

export const AuthComponents = {
  Header() {
    return (
      <View textAlign="center">
        <Image
          src={logo}
          alt="EAE logo"
          margin="2.5%"
          width="30vw"
          height="30vw"
          maxHeight="200px"
          maxWidth="200px"
          className="bouncing-top"
        />
      </View>
    );
  },

  Footer() {
    return (
      <View textAlign="center" margin="5px" className="present-credits">
        <Text color={"#fff"} fontSize={"0.8rem"}>
          &copy; Desenvolvido por All Access Consultoria Ltda.
        </Text>
      </View>
    );
  },

  SignIn: {
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View
          style={{
            display: "flex",
            backgroundColor: "#fff",
            paddingBottom: "44px",
            justifyContent: "center",
          }}
        >
          <Text
            onClick={toResetPassword}
            color={"#8044a4"}
            style={{ cursor: "pointer" }}
          >
            Esqueci minha senha
          </Text>
        </View>
      );
    },
  },
};
