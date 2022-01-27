import React from 'react';
import { Text, IconCalendarToday, IconPerson, IconSportsSoccer } from '@aws-amplify/ui-react';


const BottomTabs = (props) => {

    return (
        <div style={styles.container}>
            <div style={styles.tabContainer} onClick={props.setIsTimeline}>
                <IconCalendarToday style={styles.icon} />
                <Text className='tiny-text'>Timeline</Text>
            </div>
            <div style={styles.tabContainer} onClick={props.setIsClasses}>
                <IconSportsSoccer style={styles.icon} />
                <Text className='tiny-text'>Aulas</Text>
            </div>
            <div style={styles.tabContainer} onClick={props.setIsAccount}>
                <IconPerson style={styles.icon} />
                <Text className='tiny-text'>Conta</Text>
            </div>

        </div>
    )
};

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: '10px',
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '10px',
        cursor: 'pointer',
    },
    icon: {
        fontSize: '2.5rem',
        color: 'white',
    }
}

export default BottomTabs;
