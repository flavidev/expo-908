import React from 'react';
import { Text, IconCalendarToday, IconPerson, IconSportsSoccer, } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';

const BottomTabs = (props) => {

    return (
        <div style={styles.container}>

            <Button
                isFullWidth={true}
                className='selector-small-button'
                style={styles.tabContainer}
                onClick={props.setIsTimeline}
            >
                <IconCalendarToday style={styles.icon} />
                Timeline
            </Button>

            <Button
                isFullWidth={true}
                className='selector-small-button'
                style={styles.tabContainer}
                onClick={props.setIsClasses}
            >
                <IconSportsSoccer style={styles.icon} />
                Aulas
            </Button>
            <Button
                isFullWidth={true}
                className='selector-small-button'
                style={styles.tabContainer}
                onClick={props.setIsAccount}
            >
                <IconPerson style={styles.icon} />
                Conta
            </Button>

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
    },
    icon: {
        fontSize: '1.5rem',
    }
}

export default BottomTabs;
