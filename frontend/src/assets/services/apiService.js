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
 * @returns {Promise<Object>} Une promesse qui résout avec les données de l'utilisateur.
 */
export const getUserData = async (userId) => {
  return fetchData(`${userId}/`);
};

/**
 * Récupère les données d'activité de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données d'activité.
 */
export const getUserActivity = async (userId) => {
  return fetchData(`${userId}/activity`);
};

/**
 * Récupère les données des sessions moyennes de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données des sessions moyennes.
 */
export const getUserAverageSessions = async (userId) => {
  return fetchData(`${userId}/average-sessions`);
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
