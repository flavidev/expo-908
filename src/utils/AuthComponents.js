import { useTheme, View, Image, Text, } from "@aws-amplify/ui-react";

import logo from '../assets/images/eae-logo.png';

export const AuthComponents = {
    Header() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="EAE logo"
                    src={logo}
                    style={{
                        maxWidth: '40vw',
                        maxHeight: '40vh',
                    }}
                />
            </View>
        );
    },

    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Text color='#fff'>
                    &copy; Desenvolvido por All Access Consultoria
                </Text>
            </View>
        );
    },
}
