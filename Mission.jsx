import { useParams, useNavigate } from "react-router-dom";
import missions from "../data/missions.json";
import { useEffect } from "react";

const Mission = () => {
  const { day } = useParams();
  const index = parseInt(day) - 1;
  const mission = missions[index];
  const navigate = useNavigate();

  useEffect(() => {
    const completed = parseInt(localStorage.getItem("completedMissions") || 0);
    if (index > completed) navigate("/dashboard");
  }, [index, navigate]);

  const completeMission = () => {
    const current = parseInt(localStorage.getItem("completedMissions") || 0);
    if (index === current) {
      localStorage.setItem("completedMissions", current + 1);
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-white p-6 font-techno">
      <h2 className="text-xl mb-2">{mission.title}</h2>
      <p className="mb-2"><strong>Objective:</strong> {mission.objective}</p>
      <p className="mb-2"><strong>Task:</strong> {mission.task}</p>
      <p className="mb-2"><strong>Tool:</strong> {mission.tool}</p>
      <p className="mb-4"><strong>Challenge:</strong> {mission.challenge}</p>
      <button
        onClick={completeMission}
        className="bg-cyber-neon text-black px-4 py-2 rounded hover:bg-white"
      >
        Complete Mission +{mission.reward} XP
      </button>
    </div>
  );
};

export default Mission;