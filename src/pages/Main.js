import React, { useEffect, useState } from "react";

import Timeline from "./Timeline";
import Classes from "./Classes";
import Account from "./Account";
import UserProfile from "./UserProfile";

import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

import { checkUser } from "../utils/checkUser";

export const UserContext = React.createContext();

function Main(props) {
  const [mainState, setMainState] = useState("timeline");

  const [user, setUser] = useState({
    ...props.user.attributes,
    isAdmin: false,
    creditPoints: 1,
  });

  useEffect(() => {
    getIsAdmin();
  }, [user.isAdmin]);

  async function getIsAdmin() {
    if (user.isAdmin) {
      return;
    }
    const isAdmin = await checkUser();
    setUser({ ...user, isAdmin });
  }

  const handleSetIsTimeline = () => {
    setMainState("timeline");
  };

  const handleSetIsClasses = () => {
    setMainState("classes");
  };

  const handleSetIsAccount = () => {
    setMainState("account");
  };

  const handleSetIsProfile = () => {
    setMainState("profile");
  };

  return (
    <UserContext.Provider value={user}>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <Header setIsProfile={handleSetIsProfile} signOut={props.signOut} />
        </div>

        <div style={styles.bodyContainer}>
          {mainState === "profile" && (
            <UserProfile setIsTimeline={handleSetIsTimeline} />
          )}
          {mainState === "timeline" && <Timeline />}
          {mainState === "classes" && <Classes />}
          {mainState === "account" && <Account setUser={setUser} />}
        </div>
        <div style={styles.bottomContainer}>
          <BottomTabs
            setIsTimeline={handleSetIsTimeline}
            setIsClasses={handleSetIsClasses}
            setIsAccount={handleSetIsAccount}
          />
        </div>
      </div>
    </UserContext.Provider>
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
    flex: 1,
    width: "100%",
    height: "25vh",
    maxHeight: "250px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#553565",
  },
  bodyContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    height: "65vh",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#553565",
    width: "100%",
    maxHeight: "100px",
    height: "10vh",
  },
  logo: {
    width: "50vw",
    maxWidth: "250px",
  },
};

export default Main;
