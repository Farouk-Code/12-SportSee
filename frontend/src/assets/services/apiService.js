import { UserData, UserActivity, UserAverageSessions } from "../data-formatter/dataFormatter";

const BASE_URL = "http://localhost:3000/user/";

/**
 * Fonction utilitaire pour effectuer une requête fetch vers l'API.
 *
 * @param {string} endpoint L'endpoint de l'API à appeler.
 * @returns {Promise<Object>} Une promesse qui résout avec les données de l'API.
 * @throws {Error} Lance une erreur si la requête échoue.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Erreur de requête API : status ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error.message === "Failed to fetch" || error.message.includes("ERR_CONNECTION_REFUSED")) {
      console.error("Erreur lors de la récupération des données.");
    }
  }
};

/**
 * Récupère les données de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserData>} Une promesse qui résout avec une instance de UserData.
 */
export const getUserData = async (userId) => {
  const data = await fetchData(`${userId}/`);
  return new UserData(data);
};

/**
 * Récupère les données d'activité de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserActivity>} Une promesse qui résout avec une instance de UserActivity.
 */
export const getUserActivity = async (userId) => {
  const data = await fetchData(`${userId}/activity`);
  return new UserActivity(data);
};

/**
 * Récupère les données des sessions moyennes de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserAverageSessions>} Une promesse qui résout avec une instance de UserAverageSessions.
 */
export const getUserAverageSessions = async (userId) => {
  const data = await fetchData(`${userId}/average-sessions`);
  return new UserAverageSessions(data);
};

/**
 * Récupère les données de performance de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données de performance.
 */
export const getUserPerformance = async (userId) => {
  return fetchData(`${userId}/performance`);
};
