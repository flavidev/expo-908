import React, { useState } from 'react';
import { Button, ScrollView, Text } from '@aws-amplify/ui-react';

import { ClassCard } from '../components/ClassCard';


const tableOfClasses = [
    { day: "Domingo", events: [] },

    { day: "Segunda", events: [] },

    { day: "Terça", events: [{ title: "Altinha", starts: "07:00", ends: "08:00", availableSpots: "7" }, { title: "Altinha", "starts": "08:00", "ends": "09:00", availableSpots: "2" }, { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "1" }] },

    { day: "Quarta", events: [{ title: "Altinha", starts: "09:30", ends: "10:30", availableSpots: "10" }, { title: "Altinha", "starts": "17:00", "ends": "18:00", availableSpots: "1" }] },

    { day: "Quinta", events: [{ title: "Altinha", starts: "07:00", ends: "08:00", availableSpots: "8" }, { title: "Altinha", "starts": "08:00", "ends": "09:00", availableSpots: "4" }, { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "9" }] },

    { day: "Sexta", events: [{ title: "Altinha", starts: "09:30", ends: "10:30", availableSpots: "2" }, { title: "Altinha", "starts": "17:00", "ends": "18:00", availableSpots: "11" }] },

    { day: "Sábado", events: [{ title: "Altinha", starts: "08:30", ends: "09:30", availableSpots: "5" }, { title: "Altinha", "starts": "09:30", "ends": "10:30", availableSpots: "7" }] },
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
                            Escolha o dia da semana no menu acima
                        </Text>
                    </div>
                }

                {currentDay !== '' && <>
                    {
                        tableOfClasses[currentDay].events.length < 1 &&
                        <div style={styles.calendarItem}>
                            <Text className='small-text-black'> {tableOfClasses[currentDay].day} não tem aula</Text>
                        </div>
                    }

                    {tableOfClasses[currentDay].events.map((item, index) => {
                        return (
                            <ClassCard
                                key={index}
                                title={item.title}
                                day={tableOfClasses[currentDay].day}
                                starts={item.starts}
                                ends={item.ends}
                                availableSpots={item.availableSpots}
                            />
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
