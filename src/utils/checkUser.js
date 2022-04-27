import { Auth } from "aws-amplify";

export async function checkUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    if (groups) {
      return groups.includes("Admin");
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
