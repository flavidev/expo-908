import { useTheme, View, Image, Text, Button, useAuthenticator } from "@aws-amplify/ui-react";

import logo from '../assets/images/eae-logo.png';

export const AuthComponents = {
    Header() {

        const { tokens } = useTheme();
        return (
            <View textAlign="center" padding={tokens.space.large} >
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

        return (
            <View textAlign="center">
                <p className="tiny-text">
                    &copy; Desenvolvido por All Access Consultoria Ltda.
                </p>
            </View>
        );
    },

    SignIn: {

        Footer() {
            const { toResetPassword } = useAuthenticator();

            return (
                <View style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "#fff",
                    paddingBottom: "44px",
                    justifyContent: "center",
                }}>
                    <Text onClick={toResetPassword} color={"#8044a4"} style={{ cursor: "pointer" }} >
                        Esqueci minha senha
                    </Text >
                </View>
            );
        },
    },
}
