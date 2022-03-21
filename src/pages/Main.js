import React, { useEffect, useState } from "react";
import { View, Heading, Image } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";

import Timeline from "./Timeline";
import Classes from "./Classes";
import Account from "./Account";

import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

import logo from "../assets/images/eae-logo.png";
import defaultProfilePicture from "../assets/images/profile.png";

import { checkUser } from "../utils/checkUser";

function Main(props) {
  const [isTimeline, setIsTimeline] = useState(false);
  const [isClasses, setIsClasses] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [user, setUser] = useState({
    ...props.user.attributes,
    picture: defaultProfilePicture,
    isAdmin: false,
  });

  useEffect(() => {
    getIsAdmin();
  }, [user.isAdmin]);

  useEffect(() => {
    getSavedProfilePicture();
  }, []);

  async function getIsAdmin() {
    if (user.isAdmin) {
      return;
    }
    const isAdmin = await checkUser();
    setUser({ ...user, isAdmin });
  }

  async function getSavedProfilePicture() {
    const key =
      props.user.attributes.given_name +
      props.user.attributes.name +
      "-picture.png";
    //list and find a file in bucket
    const list = await Storage.list(key);
    if (list.length > 0) {
      await Storage.get(key, { download: true })
        .then((resp) => {
          return URL.createObjectURL(resp.Body);
        })
        .catch((err) => {
          console.log(err);
        })
        .then((url) => {
          setUser({ ...user, picture: url });
        });
    }
  }

  const handleSetIsTimeline = () => {
    setIsClasses(false);
    setIsAccount(false);
    setIsTimeline(true);
  };

  const handleSetIsClasses = () => {
    setIsTimeline(false);
    setIsAccount(false);
    setIsClasses(true);
  };

  const handleSetIsAccount = () => {
    setIsTimeline(false);
    setIsClasses(false);
    setIsAccount(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <Header user={user} />
      </div>
      <div style={styles.bodyContainer}>
        {!isTimeline && !isClasses && !isAccount && (
          <View className="container">
            <Image src={logo} style={styles.logo} className="bouncing" />
            <Heading level={6} color={"#fff"}>
              Navegue pelos menus no rodapé {user.isAdmin && "Admin"}
            </Heading>
          </View>
        )}
        {isTimeline && <Timeline />}
        {isClasses && <Classes />}
        {isAccount && (
          <Account user={user} setUser={setUser} signOut={props.signOut} />
        )}
      </div>
      <div style={styles.bottomContainer}>
        <BottomTabs
          setIsTimeline={handleSetIsTimeline}
          setIsClasses={handleSetIsClasses}
          setIsAccount={handleSetIsAccount}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#553565",
  },
  bodyContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#553565",
    width: "100%",
  },
  logo: {
    width: "30vw",
    marginBottom: "7.5vh",
    maxWidth: "50%",
  },
};

export default Main;
