import { AmplifyProvider, Authenticator, } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { AuthComponents } from './utils/AuthComponents';


import '@aws-amplify/ui-react/styles.css';
import './App.css'

import Main from './pages/Main'

import { translations } from '@aws-amplify/ui';
I18n.putVocabularies(translations);
I18n.setLanguage('pt-BR');

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