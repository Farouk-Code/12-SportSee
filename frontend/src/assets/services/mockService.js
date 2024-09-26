import { UserData, UserActivity, UserAverageSessions } from "../data-formatter/dataFormatter";
import mock from "../mocks/mockData";

/**
 * Récupère les données fictives de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserData>} Une promesse qui résout avec une instance de UserData.
 */
export const getUserData = async (userId) => {
  const userData = mock.USER_MAIN_DATA.find((res) => res.id === parseInt(userId, 10));
  return new UserData(userData);
};

/**
 * Récupère les données fictives d'activité de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserActivity>} Une promesse qui résout avec une instance de UserActivity.
 */
export const getUserActivity = async (userId) => {
  const userActivity = mock.USER_ACTIVITY.find((res) => res.userId === parseInt(userId, 10));
  return new UserActivity(userActivity);
};

/**
 * Récupère les données fictives des sessions moyennes de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<UserAverageSessions>} Une promesse qui résout avec une instance de UserAverageSessions.
 */
export const getUserAverageSessions = async (userId) => {
  const userAverage = mock.USER_AVERAGE_SESSIONS.find((res) => res.userId === parseInt(userId, 10));
  return new UserAverageSessions(userAverage);
};

/**
 * Récupère les données fictives de performance de l'utilisateur.
 *
 * @param {string} userId L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui résout avec les données de performance.
 */
export const getUserPerformance = async (userId) => {
  const userPerformance = mock.USER_PERFORMANCE.find((res) => res.userId === parseInt(userId, 10));
  return userPerformance;
};
