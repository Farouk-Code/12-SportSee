/**
 * Ce fichier contient les classes de modélisation pour formater les données de l'API.
 */

/**
 * Classe représentant les données de l'utilisateur.
 */
export class UserData {
  /**
   * Crée une nouvelle instance de UserData.
   * @param {Object} data - Les données brutes de l'utilisateur.
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos?.firstName || "";
    this.lastName = data.userInfos?.lastName || "";
    this.age = data.userInfos?.age || null;
    this.todayScore = data.todayScore || data.score || 0;
    this.keyData = {
      calorieCount: data.keyData?.calorieCount || 0,
      proteinCount: data.keyData?.proteinCount || 0,
      carbohydrateCount: data.keyData?.carbohydrateCount || 0,
      lipidCount: data.keyData?.lipidCount || 0,
    };
  }
}

/**
 * Classe représentant les données d'activité de l'utilisateur.
 */
export class UserActivity {
  /**
   * Crée une nouvelle instance de UserActivity.
   * @param {Object} data - Les données brutes d'activité de l'utilisateur.
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: new Date(session.day).getDate(),
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

/**
 * Classe représentant les données des sessions moyennes de l'utilisateur.
 */
export class UserAverageSessions {
  /**
   * Crée une nouvelle instance de UserAverageSessions.
   * @param {Object} data - Les données brutes des sessions moyennes de l'utilisateur.
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session, index) => ({
      day: ["L", "M", "M", "J", "V", "S", "D"][index],
      sessionLength: session.sessionLength,
    }));
  }
}

/**
 * Classe représentant les données de performance de l'utilisateur.
 * Elle transforme les identifiants numériques des types de performance en libellés textuels.
 */
export class UserPerformance {
  /**
   * Crée une nouvelle instance de UserPerformance.
   *
   * @param {Object} data Les données brutes de performance de l'utilisateur.
   * @param {number} data.userId L'ID de l'utilisateur.
   * @param {Array<Object>} data.data Un tableau d'objets contenant les données de performance.
   * @param {number} data.data[].kind L'identifiant numérique du type de performance (1 à 6).
   * @param {number} data.data[].value La valeur de la performance pour ce type.
   */
  constructor(data) {
    this.userId = data.userId;
    const kindMapping = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    this.data = data.data.map((item) => ({
      value: item.value,
      kind: kindMapping[item.kind],
    }));
  }
}
