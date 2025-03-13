import React, { useEffect, useState } from "react";

const AnalyticsPage = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("https://prasadportfolio.onrender.com/api/visitor/analytics");
        if (!response.ok) throw new Error("Failed to fetch analytics");
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Website Analytics</h2>
      <ul>
        {analytics.map((visitor, index) => (
          <li key={index}>
            {visitor.ipAddress} - {visitor.pageViews} views
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsPage;
