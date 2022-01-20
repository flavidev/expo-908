import React, { useState } from 'react';
import { Text, Heading } from '@aws-amplify/ui-react';

import Button from '../components/Button';

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

    const [currentDay, setCurrentDay] = useState('')

    return (
        <div style={styles.container}>
            <div style={styles.weekCalendarMenu}>
                <Button
                    onClick={() => setCurrentDay(0)}
                    text="D"
                />
                <Button
                    onClick={() => setCurrentDay(1)}
                    text="2ª"
                />
                <Button
                    onClick={() => setCurrentDay(2)}
                    text="3ª"
                />
                <Button
                    onClick={() => setCurrentDay(3)}
                    text="4ª"
                />
                <Button
                    onClick={() => setCurrentDay(4)}
                    text="5ª"
                />
                <Button
                    onClick={() => setCurrentDay(5)}
                    text="6ª"
                />
                <Button
                    onClick={() => setCurrentDay(6)}
                    text="S"
                />

            </div>

            <div style={styles.calendarContainer}>
                {currentDay === '' && <Heading className='title-text' >Clique em dia da semana para ver as aulas disponíveis</Heading>}
                {currentDay === 0 && <Heading className='title-text'>Aulas disponíveis para o domingo</Heading>}
                {currentDay === 1 && <Heading className='title-text'>Aulas disponíveis para a segunda-feira</Heading>}
                {currentDay === 2 && <Heading className='title-text'>Aulas disponíveis para a terça-feira</Heading>}
                {currentDay === 3 && <Heading className='title-text'>Aulas disponíveis para a quarta-feira</Heading>}
                {currentDay === 4 && <Heading className='title-text'>Aulas disponíveis para a quinta-feira</Heading>}
                {currentDay === 5 && <Heading className='title-text'>Aulas disponíveis para a sexta-feira</Heading>}
                {currentDay === 6 && <Heading className='title-text'>Aulas disponíveis para o sábado</Heading>}

            </div>
        </div>
    )



};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
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
        height: '100%',
        justifyContent: 'space-around',
    },
}

export default Classes;
