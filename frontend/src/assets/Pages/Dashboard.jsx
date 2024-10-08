import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SourceContext } from "../context/context";
import { UserData, UserActivity, UserAverageSessions, UserPerformance } from "../data-formatter/dataFormatter";
import Greeting from "../components/Greeting";
import DailyActivityChart from "../components/DailyActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";
import GoalChart from "../components/GoalChart";
import NutrientCard from "../components/NutrientCard";
import iconCalories from "../../../public/app-icons/icon-calories.svg";
import iconProteins from "../../../public/app-icons/icon-proteins.svg";
import iconCarbohydrates from "../../../public/app-icons/icon-carbohydrates.svg";
import iconLipids from "../../../public/app-icons/icon-lipids.svg";

/**
 * Composant qui affiche le tableau de bord de l'utilisateur.
 *
 * @returns {JSX.Element} Le composant Dashboard rendu.
 */
function Dashboard() {
  const { source } = useContext(SourceContext);
  const [userData, setUserData] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, userActivities, userSessions, userPerf] = await Promise.all([
          source.getUserData(userId),
          source.getUserActivity(userId),
          source.getUserAverageSessions(userId),
          source.getUserPerformance(userId),
        ]);

        setUserData(new UserData(userData));
        setUserActivity(new UserActivity(userActivities));
        setUserAverageSessions(new UserAverageSessions(userSessions));
        setUserPerformance(new UserPerformance(userPerf));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId, source]);

  if (!userData) {
    return <div className="no-user">Serveur non disponible...</div>;
  }

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="dashboard">
      {userData && (
        <div className="dashboard-header">
          <Greeting
            firstName={userData.firstName}
            motivationalSpeech="Félicitations ! Vous avez explosé vos objectifs hier 👏"
          />
        </div>
      )}
      <div className="dashboard-content">
        <div className="dashboard-charts">
          <div className="dashboard-row">{userActivity && <DailyActivityChart data={userActivity} />}</div>
          <div className="dashboard-row">
            {userAverageSessions && <AverageSessionsChart data={userAverageSessions} />}
            {userPerformance && <PerformanceChart data={userPerformance} />}
            {userData && <GoalChart data={userData} />}
          </div>
        </div>
        <div className="dashboard-nutrients">
          {userData && (
            <>
              <NutrientCard
                data={userData.keyData.calorieCount}
                name="Calories"
                iconClassName="nutrient-card-icon--calories"
                icon={iconCalories}
              />
              <NutrientCard
                data={userData.keyData.proteinCount}
                name="Proteines"
                iconClassName="nutrient-card-icon--proteins"
                icon={iconProteins}
              />
              <NutrientCard
                data={userData.keyData.carbohydrateCount}
                name="Glucides"
                iconClassName="nutrient-card-icon--carbohydrates"
                icon={iconCarbohydrates}
              />
              <NutrientCard
                data={userData.keyData.lipidCount}
                name="Lipides"
                iconClassName="nutrient-card-icon--lipids"
                icon={iconLipids}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
