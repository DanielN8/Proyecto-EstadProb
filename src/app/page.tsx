"use client";

import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import TabContent from "./components/TabContent";
import "../../public/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  // Funcion para iniciar una pestaña en espeficico
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    /* Nav bar */
    <div className="navbar-container">
      <div className="d-flex justify-content-center w-100">
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

    {/* Contenido de la Pestaña Activa */}
      <div className="container">
        <TabContent activeTab={activeTab} />

        {/* Contenido debajo del contenido del tab */}
        <div className="text-center">
          <p>CONTENIDO DEBAJO DEL CONTENIDO DE LOS TABS</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
