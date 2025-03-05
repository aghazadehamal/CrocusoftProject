"use client";
import { useState, useEffect } from "react";

const statistics = [
  { id: 1, target: 10, label: "İl ərzində" },
  { id: 2, target: 36, label: "Sayda müştərinin" },
  { id: 3, target: 69, label: "Sayda layihəsini uğurla tamamlamışıq" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const intervals = statistics.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.target) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 50); 
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-purple-700 text-white py-16">
      <div className="max-w-5xl mx-auto flex justify-around text-center">
        {statistics.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">{counts[index]}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
