import { ThemeProvider, Authenticator, View } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import AmplifyI18n from "amplify-i18n";
import { dictPTBR } from "./utils/Translations";
import { AuthComponents, formFields } from "./utils/AuthComponents";
import Main from "./pages/Main";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

const locales = ["en", "pt-BR"];
AmplifyI18n.configure(locales);
I18n.putVocabularies(dictPTBR);
I18n.setLanguage("pt-BR");

function App() {
  return (
    <View className="app-container">
      <ThemeProvider>
        <Authenticator
          components={AuthComponents}
          formFields={formFields}
          signUpAttributes={[
            "address",
            "birthdate",
            "email",
            "gender",
            "given_name",
            "name",
            "phone_number",
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
