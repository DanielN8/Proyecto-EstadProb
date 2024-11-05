import React from "react";

// importar lo que compone cada pestaña
import Inicio from "./tabs/inicio";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";

interface TabContentProps {
  activeTab: string;
}

{/* Funcion para navegar en las pestañas */}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <Inicio />;
      case "tab1":
        return <Tab1 />;
      case "tab2":
        return <Tab2 />;
      case "tab3":
        return <Tab3 />;
      default:
        return <Inicio />;
    }
  };

  return <div className="tab-content mt-4">{renderContent()}</div>;
};

export default TabContent;
