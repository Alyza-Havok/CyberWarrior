const BadgeDisplay = ({ completed }) => {
  const ranks = [
    "Script Kiddie",
    "Log Watcher",
    "Analyst Level I",
    "Threat Hunter",
    "Forensics Pro",
    "CyberWarrior"
  ];

  const getRank = () => {
    if (completed >= 21) return ranks[5];
    if (completed >= 15) return ranks[4];
    if (completed >= 10) return ranks[3];
    if (completed >= 6) return ranks[2];
    if (completed >= 3) return ranks[1];
    return ranks[0];
  };

  return (
    <div className="mt-4 text-cyber-blue">
      <p><strong>Current Rank:</strong> {getRank()}</p>
    </div>
  );
};

export default BadgeDisplay;