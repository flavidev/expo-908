import React, { useEffect, useState } from "react";

import Timeline from "./Timeline";
import Classes from "./Classes";
import Account from "./Account";
import UserProfile from "./UserProfile";
import Contact from "./Contact";
import About from "./About";
import Partners from "./Partners";
import IdCard from "./IdCard";

import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

import { Spinner } from "../components/Spinner";

import { checkAdmin } from "../api/API";

export const UserContext = React.createContext();

function Main(props) {
  const [mainState, setMainState] = useState("timeline");

  const [isLoading, setIsLoading] = useState(false);

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
    const isAdmin = await checkAdmin();
    setUser({ ...user, isAdmin });
  }

  const loading = (boolean) => {
    boolean ? setIsLoading(true) : setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, mainState, setMainState, loading }}
    >
      <div style={styles.container}>
        {isLoading && <Spinner />}

        {!isLoading && (
          <>
            <div style={styles.headerContainer}>
              <Header />
            </div>

            <div style={styles.bodyContainer}>
              {mainState === "profile" && <UserProfile />}
              {mainState === "timeline" && <Timeline />}
              {mainState === "classes" && <Classes />}
              {mainState === "account" && <Account signOut={props.signOut} />}
              {mainState === "contact" && <Contact />}
              {mainState === "about" && <About />}
              {mainState === "partners" && <Partners />}
              {mainState === "idCard" && <IdCard />}
            </div>
            <div style={styles.bottomContainer}>
              <BottomTabs
                setIsTimeline={() => setMainState("timeline")}
                setIsClasses={() => setMainState("classes")}
                setIsAccount={() => setMainState("account")}
              />
            </div>
          </>
        )}
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
