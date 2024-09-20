import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  getUserData as getMockUserData,
  getUserActivity as getMockUserActivity,
  getUserAverageSessions as getMockUserAverageSessions,
  getUserPerformance as getMockUserPerformance,
} from "../services/mockService";
import {
  getUserData as getApiUserData,
  getUserActivity as getApiUserActivity,
  getUserAverageSessions as getApiUserAverageSessions,
  getUserPerformance as getApiUserPerformance,
} from "../services/apiService";

// Création du contexte
export const SourceContext = createContext();

/**
 * Composant fournisseur du contexte SourceContext.
 *
 * @param {Object} props Les props du composant.
 * @param {React.ReactNode} props.children Les enfants du composant.
 * @returns {JSX.Element} Le composant SourceProvider rendu.
 */
function SourceProvider({ children }) {
  // État local pour gérer l'utilisation des données fictives
  const [useMockData, setUseMockData] = useState(false);

  /**
   * Fonction pour basculer entre l'API et les données fictives.
   */
  const toggleMockData = () => {
    setUseMockData(!useMockData);
  };

  // Valeur du contexte
  const contextValue = {
    source: {
      getUserData: useMockData ? getMockUserData : getApiUserData,
      getUserActivity: useMockData ? getMockUserActivity : getApiUserActivity,
      getUserAverageSessions: useMockData ? getMockUserAverageSessions : getApiUserAverageSessions,
      getUserPerformance: useMockData ? getMockUserPerformance : getApiUserPerformance,
    },
    useMockData,
    toggleMockData,
  };

  // Rendu du Provider avec la valeur du contexte
  return <SourceContext.Provider value={contextValue}>{children}</SourceContext.Provider>;
}

SourceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SourceProvider;
