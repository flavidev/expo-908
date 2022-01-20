import { AmplifyProvider, Authenticator, } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import AmplifyI18n from "amplify-i18n"
import { dictPTBR } from './utils/Translations';

import '@aws-amplify/ui-react/styles.css';
import './App.css'

import { AuthComponents } from './utils/AuthComponents';
import Main from './pages/Main'

const locales = ["pt-BR"]
AmplifyI18n.configure(locales)
I18n.setLanguage("pt-BR")
I18n.putVocabularies(dictPTBR)

function App() {
  return (
    <div className='app-container'>
      <AmplifyProvider >
        <Authenticator
          components={AuthComponents}
          signUpAttributes={['email']}
          loginMechanisms={['email']}
        >
          {({ signOut, user }) => (
            <Main user={user} signOut={signOut} />
          )}
        </Authenticator>
      </AmplifyProvider>
    </div>
  );
}

export default App;