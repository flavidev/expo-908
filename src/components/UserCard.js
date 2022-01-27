import {
    Card,
    View,
    Flex,
    Badge,
    Text,
    Button,
} from '@aws-amplify/ui-react';


export const UserCard = (props) => {

    const event = {
        title: props.title,
        day: props.day,
        starts: props.starts,
        ends: props.ends,
        availableSpots: props.availableSpots,
    }

    return (
        <View style={styles.container} >
            <Card>
                <Flex>
                    <Flex alignItems={'center'}>
                        <Text>
                            {event.day}
                        </Text>
                        <Text>
                            {event.starts} {event.ends}
                        </Text>
                        <Text>
                            Vagas <Badge>{event.availableSpots}</Badge>
                        </Text>
                    </Flex>
                    <Button style={styles.button}>Entrar</Button>
                </Flex>
            </Card>
        </View >
    );
};

const styles = {

    container: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '90vw',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        border: '1px solid #000',
    },
    button: {
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: '#8055a4',
        fontSize: '1rem',
        color: '#fff',
    }
}