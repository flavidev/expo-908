import {
  View,
  Image,
  Text,
  Authenticator,
  useAuthenticator,
  SelectField,
  TextAreaField,
} from "@aws-amplify/ui-react";

import logo from "../assets/images/eae-logo.png";

export const formFields = {
  signUp: {
    email: {
      isRequired: true,
      label: "Digite seu e-mail",
      labelHidden: false,
      placeholder: "email@exemplo.com",
      type: "email",
      order: 1,
    },
    given_name: {
      isRequired: true,
      label: "Nome",
      labelHidden: true,
      order: 2,
    },
    name: {
      isRequired: true,
      label: "Nome",
      labelHidden: true,
      order: 3,
    },
    phone_number: {
      isRequired: true,
      dialCode: "+55",
      label: "WhatsApp (somente números)",
      placeholder: "21999999999",
      labelHidden: false,
      order: 4,
    },
    birthdate: {
      isRequired: true,
      label: "Nascimento",
      labelHidden: false,
      order: 5,
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

  SignUp: {
    FormFields() {
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <SelectField
            required={true}
            name="gender"
            placeholder="Selecione o gênero"
          >
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="indeterminado">Prefiro não informar</option>
          </SelectField>
          <TextAreaField
            required={true}
            name="address"
            label="Endereço"
            type={"number"}
            placeholder="Ex: Av. Atlântica, nº 123, apto 123, Copacabana, Rio de Janeiro"
          />
        </>
      );
    },
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
};
