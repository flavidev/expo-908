import React, { useState } from 'react';
import { Button, ScrollView, Text } from '@aws-amplify/ui-react';


const tableOfClasses = [
    // index is the weekday starting on Sunday [0]
    [],
    [],
    ["07:00 - 08:00", "08:00 - 09:00", "18:00 - 19:00"],
    ["09:30 - 10:30", "17:00 - 18:00"],
    ["07:00 - 08:00", "08:00 - 09:00", "18:00 - 19:00"],
    ["09:30 - 10:30", "17:00 - 18:00"],
    ["08:30 - 09:30", "09:30 - 10:30"],
]

const Classes = () => {

    const [currentDay, setCurrentDay] = useState('');

    return (
        <div style={styles.container}>
            <div style={styles.buttonContainer}>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(0)}>D</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(1)}>2ª</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(2)}>3ª</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(3)}>4ª</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(4)}>5ª</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(5)}>6ª</Button>
                <Button className='week-calendar-button' isFullWidth={true} onClick={() => setCurrentDay(6)}>S</Button>
            </div>

            <ScrollView style={styles.calendarContainer}>
                {currentDay === '' &&
                    <div >
                        <Text className='small-text'>
                            Escolha o dia da semana acima no menu acima
                        </Text>
                    </div>
                }

                {currentDay !== '' && <>
                    {
                        tableOfClasses[currentDay][0] === undefined &&
                        <div style={styles.calendarItem}>
                            <Text className='small-text-black'>Hoje não tem aula</Text>
                        </div>
                    }

                    {tableOfClasses[currentDay].map((item, index) => {
                        return (
                            <div key={index} style={styles.calendarItem}>
                                <Text className='small-text-black'>Turma {item}</Text>
                                <Text className='small-text-black'>Vagas 6/12</Text>
                            </div>
                        )
                    }
                    )}
                </>
                }
            </ScrollView>
        </div>

    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100%',

    },

    buttonContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    weekCalendarMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100vw',
    },
    calendarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
    },
    calendarItem: {
        display: 'flex',
        height: '20%',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px #000',
        backgroundColor: '#fff',
        padding: '5px',
    },

}

export default Classes;
