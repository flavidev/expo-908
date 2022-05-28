import React, { useEffect, useState } from "react";

import Timeline from "./Timeline";
import Classes from "./Classes";
import Account from "./Account";

import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

import { checkUser } from "../utils/checkUser";

function Main(props) {
  const [isTimeline, setIsTimeline] = useState(true);
  const [isClasses, setIsClasses] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [user, setUser] = useState({
    ...props.user.attributes,
    isAdmin: false,
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
        {isTimeline && <Timeline user={user} />}
        {isClasses && <Classes user={user} />}
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
