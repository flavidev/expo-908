import { View, Image, Text, useAuthenticator } from "@aws-amplify/ui-react";

import logo from '../assets/images/eae-logo.png';

export const AuthComponents = {
    Header() {

        return (
            <View textAlign="center" >
                <Image
                    src={logo}
                    alt="EAE logo"
                    margin="2.5%"
                    width="30vw"
                    height="30vw"
                    maxHeight="200px"
                    maxWidth="200px"

                />
            </View>
        );
    },

    Footer() {

        return (
            <View textAlign="center" margin='5px' >
                <Text
                    color={'#fff'}
                    fontSize={'0.8rem'}
                >
                    &copy; Desenvolvido por All Access Consultoria Ltda.
                </Text>
            </View>
        );
    },

    SignIn: {

        Footer() {
            const { toResetPassword } = useAuthenticator();

            return (
                <View style={{
                    display: "flex",
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
