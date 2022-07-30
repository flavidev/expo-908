import { I18n } from "aws-amplify";
import { ThemeProvider, Authenticator, View } from "@aws-amplify/ui-react";
import AmplifyI18n from "amplify-i18n";
import { dictPTBR } from "./utils/Translations";
import { AuthComponents, formFields } from "./utils/AuthComponents";
import Main from "./pages/Main";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import customTheme from "./assets/theme/theme";

const locales = ["en", "pt-BR"];
AmplifyI18n.configure(locales);
I18n.putVocabularies(dictPTBR);
I18n.setLanguage("pt-BR");

function App() {
  return (
    <View className="app-container">
      <ThemeProvider theme={customTheme}>
        <Authenticator
          components={AuthComponents}
          formFields={formFields}
          signUpAttributes={[
            "email",
            "given_name",
            "name",
            "address",
            "gender",
            "phone_number",
            "birthdate",
          ]}
          loginMechanisms={["email"]}
        >
          {({ signOut, user }) => <Main user={user} signOut={signOut} />}
        </Authenticator>
      </ThemeProvider>
    </View>
  );
}

export default App;
