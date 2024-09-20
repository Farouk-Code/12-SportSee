import mock from "../mocks/mockData";

/**
 * Récupère les données fictives de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données fictives de l'utilisateur.
 */
export const getUserData = async (userId) => {
  const userData = mock.USER_MAIN_DATA.find((res) => res.id === parseInt(userId, 10));
  return userData;
};

/**
 * Récupère les données fictives d'activité de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données fictives d'activité.
 */
export const getUserActivity = async (userId) => {
  const userActivity = mock.USER_ACTIVITY.find((res) => res.userId === parseInt(userId, 10));
  return userActivity;
};

/**
 * Récupère les données fictives des sessions moyennes de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données fictives des sessions moyennes.
 */
export const getUserAverageSessions = async (userId) => {
  const userAverage = mock.USER_AVERAGE_SESSIONS.find((res) => res.userId === parseInt(userId, 10));
  return userAverage;
};

/**
 * Récupère les données fictives de performance de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données fictives de performance.
 */
export const getUserPerformance = async (userId) => {
  const userPerformance = mock.USER_PERFORMANCE.find((res) => res.userId === parseInt(userId, 10));
  return userPerformance;
};
