import React, { useState } from 'react'

import Timeline from '../pages/Timeline'
import Classes from '../pages/Classes'
import Profile from '../pages/Profile'

import Header from '../components/Header'
import BottomTabs from '../components/BottomTabs'

function Main(props) {

    const user = props.user.attributes
    const [isTimeline, setIsTimeline] = useState(true)
    const [isClasses, setIsClasses] = useState(false)
    const [isProfile, setIsProfile] = useState(false)

    const handleSetIsTimeline = () => {
        setIsTimeline(true)
        setIsClasses(false)
        setIsProfile(false)
    }

    const handleSetIsClasses = () => {
        setIsTimeline(false)
        setIsClasses(true)
        setIsProfile(false)
    }

    const handleSetIsProfile = () => {
        setIsTimeline(false)
        setIsClasses(false)
        setIsProfile(true)
    }

    return (
        <div style={styles.container}>
            <div style={styles.headerContainer}>
                <Header user={user} />
            </div>
            <div style={styles.bodyContainer}>
                {isTimeline &&
                    <Timeline />
                }
                {isClasses &&
                    <Classes />
                }
                {isProfile &&
                    <Profile
                        signOut={props.signOut}
                    />
                }
            </div>
            <div style={styles.bottomContainer}>
                <BottomTabs
                    setIsTimeline={handleSetIsTimeline}
                    setIsClasses={handleSetIsClasses}
                    setIsProfile={handleSetIsProfile}
                />
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#553565',
    },
    bodyContainer: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#553565',
        width: '100%',
    }
}

export default Main
