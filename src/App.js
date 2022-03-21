import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import AmplifyI18n from "amplify-i18n";
import { dictPTBR } from "./utils/Translations";
import { AuthComponents } from "./utils/AuthComponents";
import Main from "./pages/Main";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

const locales = ["en", "pt-BR"];
AmplifyI18n.configure(locales);
I18n.putVocabularies(dictPTBR);
I18n.setLanguage("pt-BR");

function App() {
  try {
    return (
      <div className="app-container">
        <AmplifyProvider>
          <Authenticator
            components={AuthComponents}
            signUpAttributes={["email", "given_name", "name"]}
            loginMechanisms={["email"]}
          >
            {({ signOut, user }) => <Main user={user} signOut={signOut} />}
          </Authenticator>
        </AmplifyProvider>
      </div>
    );
    // Workaround of AWS Cognito unsolved problem: "The quota has been exceeded" happening on Safari 15.
  } catch (err) {
    if (err.name === "QuotaExceededError") {
      window.localStorage.clear();
    }
    alert("Houve um erro, por favor recarregue a página.");
  }
}

export default App;
