import React, { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';

import Profile from './Profile';
import Plans from './Plans';
import About from './About';

const Account = (props) => {

    const [isPlans, setIsPlans] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isAbout, setIsAbout] = useState(false)

    const handleSetIsPlan = () => {
        setIsPlans(true)
        setIsProfile(false)
        setIsAbout(false)
    }

    const handleSetIsProfile = () => {
        setIsPlans(false)
        setIsProfile(true)
        setIsAbout(false)
    }

    const handleSetIsAbout = () => {
        setIsPlans(false)
        setIsProfile(false)
        setIsAbout(true)
    }

    const handleGoBack = () => {
        setIsPlans(false)
        setIsProfile(false)
        setIsAbout(false)
    }

    return (
        <div style={styles.container}>
            {!isPlans && !isProfile && !isAbout &&
                <>
                    <Button style={styles.button} onClick={handleSetIsProfile} >Perfil</Button>
                    <Button style={styles.button} onClick={handleSetIsPlan} >Planos</Button>
                    <Button style={styles.button} onClick={handleSetIsAbout} >Sobre</Button>
                    <Button style={styles.button} onClick={props.signOut}>Sair</Button>
                </>
            }

            {isProfile &&
                <>
                    <div style={styles.areaContainer}>
                        <Profile />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }
            {isPlans &&
                <>
                    <div style={styles.areaContainer}>
                        <Plans />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }
            {isAbout &&
                <>
                    <div style={styles.areaContainer}>
                        <About />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }

        </div>
    )
};

const styles = {
    container: {
        display: 'flex',
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    button: {
        color: "#000",
        backgroundColor: "#fff",
        width: "30vw",
        height: "7.5vh",
        borderRadius: "5px",
        border: "1px solid #000",
    }
}
export default Account