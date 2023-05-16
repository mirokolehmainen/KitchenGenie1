import React, { useState, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Flowers from "./pages/recipes";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LoginOrSignup from "./pages/LoginOrSignUp";
import Login from "./pages/Login";
import Recipes from "./pages/recipes";
import { homeOutline, heartOutline, personCircleOutline } from "ionicons/icons";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

setupIonicReact();
const firebaseConfig = {
  apiKey: "AIzaSyD7vb0prKYyao6cjYo1ziBMERMmAZBOszc",
  authDomain: "kitchengenie-df0e9.firebaseapp.com",
  projectId: "kitchengenie-df0e9",
  storageBucket: "kitchengenie-df0e9.appspot.com",
  messagingSenderId: "433140431779",
  appId: "1:433140431779:web:dae88885ddcb545ac5b816"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export type UserType = {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
};
export const UserContext = createContext<UserType | null>(null);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/recipes">
              {isLoggedIn ? <Recipes /> : <LoginOrSignup />}
            </Route>

            <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
            </Route>
            
    
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UserContext.Provider>
  );
};

export default App;
