import React from 'react';

import { I18n } from 'aws-amplify';
import { AmplifyProvider, Authenticator, Heading } from '@aws-amplify/ui-react';

import { translations } from '@aws-amplify/ui';
import { dictionaire } from './utils/Translations'

import Main from './pages/Main'

import './App.css'
import '@aws-amplify/ui-react/styles.css';

I18n.putVocabularies(translations);
I18n.setLanguage('pt-BR');
I18n.putVocabularies(dictionaire)


function App() {

  return (
    <>
      <AmplifyProvider>
        <div className='container'>
          <div className='heading-container'>
            <Heading level={2} className='heading-text'>
              EAE
            </Heading>
          </div>
          <div className='authenticator-container'>
            <Authenticator
              className='authenticator-component'
              signUpAttributes={['given_name', 'name', 'phone_number']}
              loginMechanisms={['email']}
            >
              {({ signOut, user }) => (
                <Main user={user} signOut={signOut} />
              )}
            </Authenticator>
          </div>
        </div>
      </AmplifyProvider>
    </>
  );
}


export default App;
